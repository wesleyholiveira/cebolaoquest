require('dotenv-safe').config()

const crypto = require('crypto')

const jwt = require('jsonwebtoken')
const express = require('express')
const app = express()

const map = require('./utils/mapModel')
const db = require('./config/mysql')
const attributeModel = require('./models/attribute')
const playerModel = require('./models/player')
const negativeTraitModel = require('./models/negativeTrait')
const specialTechniqueModel = require('./models/specialTechnique')
const martialSkillModel = require('./models/martialSkill')
const stratagemModel = require('./models/stratagem')
const npModel = require('./models/np')
const npTypeModel = require('./models/np_type')
const npSpecialStrikeModel = require('./models/np_special_strike')
const npEffectModel = require('./models/np_effect')
const userModel = require('./models/user')

const attributeRepository = require('./repositories/attributeRepository')
const playerRepository = require('./repositories/playerRepository')
const negativeTraitsRepository = require('./repositories/negativeTraitsRepository')
const specialTechniqueRepository = require('./repositories/specialTechniqueRepository')
const martialSkillRepository = require('./repositories/martialSkillRepository')
const stratagemRepository = require('./repositories/stratagemRepository')
const npRepository = require('./repositories/npRepository')
const npTypeRepository = require('./repositories/npTypeRepository')
const npSpecialStrikeRepository = require('./repositories/npSpecialStrikeRepository')
const npEffectRepository = require('./repositories/npEffectRepository')
const userRepository = require('./repositories/userRepository')

app.use(express.json())
app.use(function (req, res, next) {
  let token = req.headers['authorization']

  if (req.path == '/login' || req.path == '/register' || req.path == '/logout') {
    return next()  
  }
  
  try {
    
    if (!token) {
        return res.status(401).json({
            message: 'O token não foi fornecido'
        }).end()
    }
  
    try {
      token = token.split(' ')[1]
      const jwtDecoded = jwt.verify(token, process.env.SECRET)
      console.log(jwtDecoded)
    } catch (err) {
      console.log(err)
      return res.status(401).json({
          message: 'Token inválido'
      }).end()
    }
  } catch {
    return res.status(401).json({
      message: 'Token inválido'
    }).end()
  }

  return next()
})

app.get('/user', async (req, res) => {
  const token = req.headers['authorization'].split(' ')[1]
  const { userId } = jwt.decode(token)

  return res.json({
    user: {
      id: userId,
      token
    }
  }).end()
})

app.post('/register', async (req, res) => {
  const {
    data: {
      username,
      password,
      email
    }
  } = req.body

  const secret = process.env.SECRET
  const encryptedPwd = crypto.createHash('sha512').update(password + secret).digest('hex')
  const user = userModel({
    username,
    password: encryptedPwd,
    email
  })

  return userRepository(db).insert(user).then(() => res.json({
      message: 'Usuário criado com sucesso'
    }).end()
  ).catch((err) => res.status(400).json({
      message: err
    }).end()
  )
})

app.post('/login', async (req, res) => {
  const {
    username,
    password
  } = req.body

  const secret = process.env.SECRET
  const encryptedPwd = crypto.createHash('sha512').update(password + secret).digest('hex')
  const users = await userRepository(db).getUserByUsernameAndPassword(username, encryptedPwd)
  let userId = 0

  if (users.length > 0) {
    userId = users.flatMap(el => el.id)[0]
    const token = jwt.sign({
      userId,
    }, secret, {
      expiresIn: '1h'
    })
  
    return res.json({token}).end()
  }

  return res.status(401).json({message: 'Usuário e/ou senha inválidos'}).end()
})

app.post('/player', async (req, res) => {
  const { 
    name,
    level,
    exp,
    funds,
    valorPoints,
    meritPoints,
    proficiencyPoints,
    statusPoints,
    alignment,
    principle,
    job,
    attributes,
    stratagems,
    negativeTraits,
    martialSkills,
    specialTechniques,
    noblePhantasms,
    userId
  } = req.body

  const playerRepo = playerRepository(db)
  const player = playerModel({
    name,
    level,
    exp,
    funds,
    meritPoints,
    proficiencyPoints,
    statusPoints,
    alignment,
    principle,
    class: job,
    valorPoints,
    userId
  })

  const playerPromise = playerRepo.insert(player)
  return playerPromise.then(async data => {
    const playerId = data

    const createModel = (model) => ([key, value]) =>
      model({
        ...value,
        player_id: playerId
      }
    )

    const attributeModels = attributes.flatMap(attribute => map(
      attribute,
      ([key, value]) =>
        attributeModel({
          name: key,
          rank: value,
          player_id: playerId
        }
      )
    ))

    const stratagemsModels = map(stratagems, createModel(stratagemModel))
    const negativeTraitModels = map(negativeTraits, createModel(negativeTraitModel))
    const martialSkillModels = map(martialSkills, createModel(martialSkillModel))
    const specialTechniqueModels = map(specialTechniques, createModel(specialTechniqueModel))
    const noblePhantasmsModels = map(noblePhantasms, createModel(npModel))

    if (attributeModels.length > 0) {
      await attributeRepository(db).insertAll(attributeModels)
    }

    if (stratagemsModels.length > 0) {
      await stratagemRepository(db).insertAll(stratagemsModels)
    }

    if (negativeTraitModels.length > 0) {
      await negativeTraitsRepository(db).insertAll(negativeTraitModels)
    }

    if (martialSkillModels.length > 0) {
      await martialSkillRepository(db).insertAll(martialSkillModels)
    }

    if (specialTechniqueModels.length > 0) {
      await specialTechniqueRepository(db).insertAll(specialTechniqueModels)
    }

    if (noblePhantasmsModels.length > 0) {
      const npIds = await npRepository(db).insertAll(noblePhantasmsModels)
      const models = noblePhantasms.map((np, i) => ({
        type: npTypeModel({
          name: np.type.name,
          np_id: npIds[i]
        }),
        specialStrike: npSpecialStrikeModel({
          name: np.specialStrike.name,
          np_id: npIds[i]
        }),
        effect: np.effects.map(effect => npEffectModel({
          name: effect.name,
          valors: effect.valors,
          np_id: npIds[i]
        }))
      }))

      const npTypeModels = models.map(m => m.type)
      const npSpecialStrikeModels = models.map(s => s.specialStrike)
      const npEffectModels = models.flatMap(m => m.effect)

      await npTypeRepository(db).insertAll(npTypeModels)
      await npSpecialStrikeRepository(db).insertAll(npSpecialStrikeModels)
      await npEffectRepository(db).insertAll(npEffectModels)
    }
    
    return res.json({
      statusMessage: 'success',
      data: 'Uma nova ficha foi cadastrada com sucesso'
    }).end()

  }).catch(error => {
    return res.json({
      statusMessage: 'error',
      data: `Ocorreu um problema ao tentar cadastrar uma nova ficha: ${error}`
    }).end()
  })
})

module.exports = app