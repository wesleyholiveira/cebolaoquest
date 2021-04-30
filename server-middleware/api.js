require('dotenv-safe').config()

const fs = require('fs')
const crypto = require('crypto')

const jwt = require('jsonwebtoken')
const express = require('express')
const formidable = require('formidable')
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
const image = require('./models/image')
const imageRepository = require('./repositories/imageRepository')
const category = require('./models/category')
const categoryRepository = require('./repositories/categoryRepository')

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

app.get('/player/name/user/:userId', async (req, res) => {
  const { userId } = req.params
  try {
    const results = await playerRepository(db).getNameByUserId(userId)
    return res.json({data: results}).end()
  } catch (err) {
    return res.status(500).json({err})
  }
})

app.delete('/player/:userId', async (req, res) => {
  const { userId } = req.params
  try {
    await playerRepository(db).deleteById(userId)
    return res.json({
      message: 'Usuário excluido com sucesso',
      statusMessage: 'success'
    }).end()
  } catch (err) {
    return res.status(500).json({
      message: err,
      statusMessage: 'error'
    })
  }
})

app.get('/player/:playerId/user/:userId', async (req, res) => {

  try {
    const { playerId, userId } = req.params

    if (!playerId || !userId) {
      return res.status(400).json({
        message: 'Usuário não encontrado',
        statusMessage: 'error'
      }).end()
    }

    const results = await playerRepository(db).getAllByPlayerAndUserID({ playerId, userId })

    if (results.length < 1) {
      return res.status(400).json({
        message: 'Usuário não encontrado',
        statusMessage: 'error'
      }).end()
    }

    const player = results[0]
    const {
      id,
      name,
      principle,
      alignment,
      level,
      exp,
      funds,
      proficiencyPoints,
      statusPoints,
      species,
      sex,
      age,
      height,
      weight,
      birthday,
      locality,
      blood_type,
      self_denomination,
      likes,
      dislikes,
      abstract,
      talents,
      // meritPoints
    } = player

    const parameters = await attributeRepository(db).getParametersByPlayerId(id)
    const stratagems = await stratagemRepository(db).getStratagemsByPlayerId(id)
    const negativeTraits = await negativeTraitsRepository(db).getNegativeTraitsByPlayerId(id)
    const martialSkills = await martialSkillRepository(db).getMartialSKillsByPlayerId(id)
    const specialTechniques = await specialTechniqueRepository(db).getSpecialTechniquesByPlayerId(id)
    const noblePhantasms = await npRepository(db).getNoblePhantasmsByPlayerId(id)
    const referenceImages = await imageRepository(db).getImagesByPlayerId(id)
    const npTypeRepo = npTypeRepository(db)
    const npSpecialSkRepo = npSpecialStrikeRepository(db)
    const npEffectsRepo = npEffectRepository(db)
    const categories = await categoryRepository(db).getCategoriesByPlayerId(id)
    let unitAge = 'anos'
    let valorPoints = []

    if (age == 1) {
      unitAge = 'ano'
    }

    let stories = [{
      name: '',
      content: '',
      subcategory: false,
      children: [],
    }]

    if (categories.length > 0) {
      stories = categories.flatMap(cat => ({
        ...cat,
        children: JSON.parse(cat.children)
      }))
    }

    const negativeTraitsSum = negativeTraits.map(trait => trait.merits).reduce((acc, merit) => acc + merit)

    const totalMerits =
      stratagems
        .concat(martialSkills)
        .concat(specialTechniques)
        .concat(noblePhantasms.length > 1 ? noblePhantasms : [])
        .map(el => el.merits)
        .reduce((acc, merit) => acc + merit) - (negativeTraitsSum + noblePhantasms.length)

    const npStructure = await noblePhantasms.map(async np => ({
      ...np,
      type: await npTypeRepo.getNoblePhantasmTypeByNpId(np.id),
      specialStrike: await npSpecialSkRepo.getNoblePhantasmSpecialStrikesByNpId(np.id),
      effects: await npEffectsRepo.getNoblePhantasmEffectsByNpId(np.id)
    }))

    const npResults = await Promise.all(npStructure)
    npResults.forEach(np => 
      valorPoints.push(
        np.effects.map(e => e.valors)
        .reduce((acc, valor) => acc + valor)
      )
    )
    
    const currentClass = player['class']
    const user = {
      id,
      name,
      principle,
      alignment,
      level,
      exp,
      funds,
      meritPoints: totalMerits,
      statusPoints,
      parameters,
      valorPoints,
      noblePhantasms: npResults,
      proficiencyPoints,
      currentClass,
      stratagems,
      negativeTraits,
      martialSkills,
      specialTechniques,
      extraInfos: {
        species,
        sex,
        age: {
          formattedUnit: `${age} ${unitAge}`,
          unit: player.age
        },
        height: {
          formattedUnit: `${height.toFixed(2).replace('.', ',')} m`,
          unit: player.height
        },
        weight: {
          formattedWeight: `${weight} kg`,
          unit: player.weight
        },
        birthday,
        locality,
        bloodType: blood_type,
        addressSelfAs: self_denomination,
        likes,
        dislikes,
        abstract,
        talents,
        stories,
        referenceImages
      }
    }

    return res.json({user}).end()

  } catch (err) {
    console.log(err)
    return res.status(500).json({ message: err, statusMessage: 'error' }).end()
  }
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

    return res.json({ token }).end()
  }

  return res.status(401).json({ message: 'Usuário e/ou senha inválidos' }).end()
})

app.post('/player', async (req, res) => {
  const {
    id,
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
    userId,
    extraInfos
  } = req.body

  const playerRepo = playerRepository(db)
  const player = playerModel({
    id,
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
    species: extraInfos.species,
    sex: extraInfos.sex,
    height: extraInfos.height ? extraInfos.height.unit : 0,
    weight: extraInfos.weight ? extraInfos.weight.unit : 0,
    age: extraInfos.age ? extraInfos.age.unit : 0,
    locality: extraInfos.locality,
    bloodType: extraInfos.bloodType,
    birthday: extraInfos.birthday,
    selfDenomination: extraInfos.addressSelfAs,
    talents: extraInfos.talents,
    likes: extraInfos.likes,
    dislikes: extraInfos.dislikes,
    abstract: extraInfos.abstract,
    userId
  })

  const attributeRepo = attributeRepository(db)
  const stratagemRepo = stratagemRepository(db)
  const negativeTraitRepo = negativeTraitsRepository(db)
  const martialSkillRepo = martialSkillRepository(db)
  const specialTechRepo = specialTechniqueRepository(db)

  const playerPromise = playerRepo.insert(player)
  return playerPromise.then(async data => {
    console.log(data)
    const playerId = data

    const createModel = (model) => ([key, value]) =>
      model({
        ...value,
        player_id: playerId
      })

    if (attributes) {
      const attributeModels = map(attributes, createModel(attributeModel))

      if (attributeModels.length > 0) {
        await attributeRepo.insertAll(attributeModels)
      }
    }

    if (stratagems) {
      const stratagemsModels = map(stratagems, createModel(stratagemModel))
      if (stratagemsModels.length > 0) {
        stratagemRepo.deleteByPlayerId(playerId).then(
          async () => await stratagemRepo.insertAll(stratagemsModels)
        )
      }
    }

    if (negativeTraits) {
      const negativeTraitModels = map(negativeTraits, createModel(negativeTraitModel))
      if (negativeTraitModels.length > 0) {
        negativeTraitRepo.deleteByPlayerId(playerId).then(
          async () => await negativeTraitRepo.insertAll(negativeTraitModels)
        )
      }
    }

    if (martialSkills) {
      const martialSkillModels = map(martialSkills, createModel(martialSkillModel))
      if (martialSkillModels.length > 0) {
        martialSkillRepo.deleteByPlayerId(playerId).then(
          async () => await martialSkillRepo.insertAll(martialSkillModels)
        )
      }
    }

    if (specialTechniques) {
      const specialTechniqueModels = map(specialTechniques, createModel(specialTechniqueModel))
      if (specialTechniqueModels.length > 0) {
        specialTechRepo.deleteByPlayerId(playerId).then(
          async () => await specialTechRepo.insertAll(specialTechniqueModels)
        )
      }
    }

    if (noblePhantasms) {
      const noblePhantasmsModels = map(noblePhantasms, createModel(npModel))
      if (noblePhantasmsModels.length > 0) {
        const npIds = await npRepository(db).insertAll(noblePhantasmsModels)
        const npTypes = noblePhantasms.map(el => el.type)
        const npSpecialStrikes = noblePhantasms.map(el => el.specialStrike).filter(el => el != undefined)
        const npEffects = noblePhantasms.flatMap((el, i) => ({
          id: el.id || null,
          effect: el.effects,
          np_id: npIds[i]
        }))

        if (npTypes.length > 0) {
          const npTypeModels = npTypes.map((t, i) => npTypeModel({
            id: t.id || null,
            name: t.name || '',
            np_id: npIds[i]
          }))

          await npTypeRepository(db).insertAll(npTypeModels)
        }

        if (npSpecialStrikes.length > 0) {
          const npSpecialStrikeModels = npSpecialStrikes.map((s, i) => npSpecialStrikeModel({
            id: null,
            name: s || '',
            np_id: npIds[i]
          }))

          await npSpecialStrikeRepository(db).insertAll(npSpecialStrikeModels)
        }

        if (npEffects.length > 0) {
          const npEffectModels = npEffects.flatMap(e => e.effect.map(ef => npEffectModel({
            id: ef.id || null,
            name: ef.name || '',
            valors: ef.valors,
            np_id: e.np_id
          })))

          specialTechRepo.deleteByPlayerId(playerId).then(
            async () => await npEffectRepository(db).insertAll(npEffectModels)
          )
        }
      }
    }

    if (extraInfos.stories) {
      const categoryModels = extraInfos.stories.flatMap(el => category({
        id: el.id || null,
        name: el.name,
        content: el.content,
        subcategory: el.subcategory,
        children: el.children,
        player_id: playerId
      }))

      if (categoryModels.filter(cat => cat.name != '').length > 0) {
        await categoryRepository(db).insertAll(categoryModels)
      }
    }

    return res.json({
      statusMessage: 'success',
      data: 'Uma nova ficha foi cadastrada com sucesso',
      playerId
    }).end()

  }).catch(error => {
    console.log(error)
    return res.status(500).json({
      statusMessage: 'error',
      data: `Ocorreu um problema ao tentar cadastrar uma nova ficha: ${error}`
    }).end()
  })
})

app.post('/upload/:playerId', async (req, res) => {
  let playerId = null
  const form = new formidable.IncomingForm({ multiples: true })
  const imageRepo = imageRepository(db)

  if ({ playerId } = req.params) {
    const result = await playerRepository(db).getById(playerId)

    if (result.length < 1) {
      return res.status(400).json({
        data: {
          message: 'ID do usuário inválido',
          statusMessage: 'error'
        }
      }).end()
    }

    const uploadPromise = () => new Promise((resolve, reject) => {
      form.parse(req, async (err, fields, files) => {
        if (err) return reject(err)

        if (files.referenceImages) {
          if (!files.referenceImages.length) {
            files.referenceImages = [files.referenceImages]
          }

          return resolve(files.referenceImages.map(f => {
            const oldPath = f.path
            const newPath = `./uploads/${f.name}`

            fs.rename(oldPath, newPath, (err) => {
              if (err) throw err
            })

            return image({
              id: null,
              img: f.name,
              player_id: playerId
            })
          }))
        } else {
          return res.end()
        }
      })
    })

    const removeImages = () => new Promise((resolve, reject) => 
      imageRepo.getImagesByPlayerId(playerId).then(img => {
        resolve(imageRepo.deleteAllByPlayerId(playerId).then(() =>
          fs.unlink(`./uploads/${img.img}}`, (err) => {
            if (err) return reject(err)
          })
        ))
      })
    )

    try {
      await removeImages()

      const imgModels = await uploadPromise()
      await imageRepo.insertAll(imgModels)

      return res.json({
        data: {
          message: 'Upload de imagens efetuado com sucesso',
          statusMessage: 'success'
        }
      }).end()
    } catch (err) {
      console.log(err)
      return res.status(400).json({
        data: {
          message: err,
          statusMessage: 'error'
        }
      }).end()
    }
  }

  return res.status(400).json({
    data: {
      message: 'ID do usuário inválido',
      statusMessage: 'error'
    }
  }).end()
})

module.exports = app