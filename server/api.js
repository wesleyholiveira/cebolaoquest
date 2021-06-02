require('dotenv').config()

import { copyFile } from 'fs'
import { join } from 'path'
import { createHash } from 'crypto'

import { verify, decode, sign } from 'jsonwebtoken'
import express, { json } from 'express'
import { IncomingForm } from 'formidable'
const app = express()

import map from './utils/mapModel'
import db from './config/mysql'
import attributeModel from './models/attribute'
import playerModel from './models/player'
import negativeTraitModel from './models/negativeTrait'
import specialTechniqueModel from './models/specialTechnique'
import martialSkillModel from './models/martialSkill'
import stratagemModel from './models/stratagem'
import npModel from './models/np'
import npTypeModel from './models/np_type'
import npSpecialStrikeModel from './models/np_special_strike'
import npEffectModel from './models/np_effect'
import userModel from './models/user'

import attributeRepository from './repositories/attributeRepository'
import playerRepository from './repositories/playerRepository'
import negativeTraitsRepository from './repositories/negativeTraitsRepository'
import specialTechniqueRepository from './repositories/specialTechniqueRepository'
import martialSkillRepository from './repositories/martialSkillRepository'
import stratagemRepository from './repositories/stratagemRepository'
import npRepository from './repositories/npRepository'
import npTypeRepository from './repositories/npTypeRepository'
import npSpecialStrikeRepository from './repositories/npSpecialStrikeRepository'
import npEffectRepository from './repositories/npEffectRepository'
import userRepository from './repositories/userRepository'
import image from './models/image'
import imageRepository from './repositories/imageRepository'
import category from './models/category'
import categoryRepository from './repositories/categoryRepository'
import userRoleRepository from './repositories/userRoleRepository'

const tokenBlacklist = []

app.use(json())
app.use(function (req, res, next) {
  let token = req.headers['authorization']
  const path = req.path

  if (!path.startsWith('/api') || (
    path.indexOf('/login') >= 0
    || path.indexOf('/register') >= 0
    || path.indexOf('/logout') >= 0
    || (new RegExp(/\/player\/\d+/)).test(path)
  )) {
    return next()
  }

  try {

    if (!token) {
      return res.status(401).json({
        message: 'O token não foi fornecido',
        statusMessage: 'error'
      })
    }

    if (tokenBlacklist.includes(token)) {
      return res.status(500).json({
        message: 'Token indisponível para futuros usos',
        statusMessage: 'error'
      })
    }

    try {
      token = token.split(' ')[1]
      const jwtDecoded = verify(token, process.env.SECRET)
      console.log(jwtDecoded)
    } catch (err) {
      console.log(err)
      return res.status(401).json({
        message: 'Token inválido'
      })
    }
  } catch {
    return res.status(401).json({
      message: 'Token inválido'
    })
  }

  return next()
})

app.get('/api/user', async (req, res) => {
  const token = req.headers['authorization'].split(' ')[1]
  const { userId, username, isAdmin } = decode(token)

  return res.json({
    user: {
      id: userId,
      username,
      token,
      isAdmin
    }
  })
})

app.get('/api/player/name/user/:userId', async (req, res) => {
  const { userId } = req.params
  try {
    const token = req.headers['authorization'].split(' ')[1]
    const { isAdmin } = decode(token)

    if (isAdmin) {
      return res.json({ data: await playerRepository(db).getName() })
    }

    return res.json({ data: await playerRepository(db).getNameByUserId(userId) })

  } catch (err) {
    console.log(err)
    return res.status(500).json({ err })
  }
})

app.delete('/api/player/:userId', async (req, res) => {
  const { userId } = req.params
  try {
    await playerRepository(db).deleteById(userId)
    return res.json({
      message: 'Usuário excluido com sucesso',
      statusMessage: 'success'
    })
  } catch (err) {
    return res.status(500).json({
      message: err,
      statusMessage: 'error'
    })
  }
})

app.get('/api/player/:playerId/user/:userId', async (req, res) => {

  try {
    const { playerId, userId } = req.params

    const token = req.headers['authorization'].split(' ')[1]
    const { isAdmin } = decode(token)

    if (!playerId || !userId) {
      return res.status(404).json({
        message: 'Usuário não encontrado',
        statusMessage: 'error'
      })
    }

    let results
    if (isAdmin) {
      results = await playerRepository(db).getAllByPlayer(playerId)
    } else {
      results = await playerRepository(db).getAllByPlayerAndUserID({ playerId, userId })
    }

    if (results.length < 1) {
      return res.status(404).json({
        message: 'Usuário não encontrado',
        statusMessage: 'error'
      })
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
      valorPoints,
      userRoleId,
      meritPoints
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
    const valorsArray = []

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
        children: cat.children.length > 0 ? JSON.parse(cat.children) : []
      }))
    }

    let negativeTraitsSum = 0
    if (negativeTraits.length > 0) {
      negativeTraitsSum = negativeTraits.map(trait => trait.merits).reduce((acc, merit) => acc + merit)
    }

    let npLength = noblePhantasms.length > 1 ? noblePhantasms.length : 0
    const meritsList =
      stratagems.concat(martialSkills)
        .concat(specialTechniques)
        .concat(noblePhantasms.length > 1 ? noblePhantasms : [])
        .map(el => el.merits)
    const totalMerits =
      meritsList.length < 1 ? 0 :
        meritsList.reduce((acc, merit) => acc + merit) - (negativeTraitsSum + npLength)

    const npStructure = await noblePhantasms.map(async np => ({
      ...np,
      type: await npTypeRepo.getNoblePhantasmTypeByNpId(np.id),
      specialStrike: await npSpecialSkRepo.getNoblePhantasmSpecialStrikesByNpId(np.id),
      effects: await npEffectsRepo.getNoblePhantasmEffectsByNpId(np.id)
    }))

    const npResults = await Promise.all(npStructure)
    npResults.forEach(np => {
      const npeLength = np.effects.length

      if (npeLength > 0) {
        valorsArray.push(np.effects.map(e => e.valors)
          .reduce((acc, valor) => acc + valor))
      }
    })

    valorsArray.push(valorPoints)

    const currentClass = player['class']
    const user = {
      id,
      userRoleId,
      name,
      principle,
      alignment,
      level,
      exp,
      funds,
      meritPoints: totalMerits,
      statusPoints,
      parameters,
      valorPoints: valorsArray,
      noblePhantasms: npResults,
      proficiencyPoints,
      currentClass,
      stratagems,
      negativeTraits,
      martialSkills,
      specialTechniques,
      extraInfos: {
        species: species || '',
        sex,
        age: {
          formattedUnit: `${age} ${unitAge}`,
          unit: player.age
        },
        height: {
          formattedUnit: height != undefined ?
            `${parseFloat(height).toFixed(2).replace('.', ',')} m` : '0 m',
          unit: player.height
        },
        weight: {
          formattedWeight: `${weight} kg`,
          unit: player.weight
        },
        birthday,
        locality: locality || '',
        bloodType: blood_type,
        addressSelfAs: self_denomination || '',
        likes: likes || '',
        dislikes: dislikes || '',
        abstract: abstract || '',
        talents: talents || '',
        stories,
        referenceImages
      }
    }

    return res.json({ user })

  } catch (err) {
    console.log(err)
    return res.status(500).json({ message: err, statusMessage: 'error' })
  }
})

app.post('/api/register', async (req, res) => {
  try {
    const {
      data: {
        username,
        password,
        email,
      }
    } = req.body

    const secret = process.env.SECRET
    const encryptedPwd = createHash('sha512').update(password + secret).digest('hex')
    const user = userModel({
      username: username.trim(),
      password: encryptedPwd.trim(),
      email: email.trim()
    })

    const userId = await userRepository(db).insert(user)
    await userRoleRepository(db).insert({
      id: null,
      userId,
      roleId: 1
    })

    return res.json({
      message: 'Usuário criado com sucesso'
    })
  } catch (err) {
    return res.status(400).json({
      message: err
    })
  }
})

app.post('/api/logout', async (req, res) => {
  let token = req.headers['authorization']
  if (!token) {
    return res.status(401).json({
      message: 'O token não foi fornecido'
    })
  }

  try {
    token = token.split(' ')[1]
    const jwtDecoded = verify(token, process.env.SECRET)
    if (jwtDecoded) {
      tokenBlacklist.push(token)
      return res.json({
        message: 'Você saiu do sistema',
        statusMessage: 'success'
      })
    }
  } catch (err) {
    console.log(err)
    return res.status(401).json({
      message: 'Token inválido',
      statusMessage: 'error'
    })
  }
})

app.post('/api/login', async (req, res) => {
  const {
    username,
    password
  } = req.body

  const secret = process.env.SECRET
  const encryptedPwd = createHash('sha512').update(password + secret).digest('hex')

  if (username && password) {

    const users = await userRepository(db).getUserByUsernameAndPassword(username.trim(), encryptedPwd)
    if (users.length > 0) {
      const result = users.flatMap(el => ({
        userId: el.id,
        roleId: el.role_id
      }))[0]
  
      let isAdmin = false
      if (result.roleId && result.roleId == 2) {
        isAdmin = true
      }
  
      const { userId } = result
      const token = sign({
        userId,
        username,
        isAdmin
      }, secret, { expiresIn: '1h' })
  
      return res.json({ userId, username, isAdmin, token })
    }
  
    return res.status(401).json({ message: 'Usuário e/ou senha inválidos', statusMessage: 'error' })
  }

  return res.status(400).json({message: 'Dados invállidos', statusMessage: 'error'})

})

app.get('/api/player/:id', async (req, res) => {
  const { id } = req.params
  if (!id) {
    return res.status(400).json({
      message: 'Usuário inválido',
      statusMessage: 'error'
    })
  }

  const results = await playerRepository(db).getAllByPlayer(id)
  if (!results || results.length < 1) {
    return res.status(404).json({
      message: 'Usuário não encontrado',
      statusMessage: 'error'
    })
  }

  const player = results[0]
  const {
    name,
    principle,
    alignment,
    level,
    exp,
    funds,
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
    talents
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

  if (age < 2) {
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
      children: cat.children.length > 0 ? JSON.parse(cat.children) : []
    }))
  }

  const npStructure = await noblePhantasms.map(async np => ({
    ...np,
    type: await npTypeRepo.getNoblePhantasmTypeByNpId(np.id),
    specialStrike: await npSpecialSkRepo.getNoblePhantasmSpecialStrikesByNpId(np.id),
    effects: await npEffectsRepo.getNoblePhantasmEffectsByNpId(np.id)
  }))

  const npResults = await Promise.all(npStructure)
  const currentClass = player['class']
  const user = {
    id,
    name,
    principle,
    alignment,
    level,
    exp,
    funds,
    parameters,
    noblePhantasms: npResults,
    currentClass,
    stratagems,
    negativeTraits,
    martialSkills,
    specialTechniques,
    extraInfos: {
      species: species || '',
      sex,
      age: {
        formattedUnit: `${age} ${unitAge}`,
        unit: player.age
      },
      height: {
        formattedUnit: height != undefined ? `${parseFloat(height).toFixed(2).replace('.', ',')} m` : '0 m',
        unit: player.height
      },
      weight: {
        formattedWeight: `${weight} kg`,
        unit: player.weight
      },
      birthday,
      locality: locality || '',
      bloodType: blood_type,
      addressSelfAs: self_denomination || '',
      likes: likes || '',
      dislikes: dislikes || '',
      abstract: abstract || '',
      talents: talents || '',
      stories,
      referenceImages
    }
  }

  return res.json(user)
})

app.post('/api/player', async (req, res) => {
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
    extraInfos,
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
  const npEffectsRepo = npEffectRepository(db)
  const categoriesRepo = categoryRepository(db)

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
        attributeRepo.insertAll(attributeModels)
      }
    }

    if (stratagems) {
      const stratagemsModels = map(stratagems, createModel(stratagemModel))
      const stratsLength = stratagemsModels.length
      stratagemRepo.deleteByPlayerId(playerId).then(() => {
        if (stratsLength > 0) {
          return stratagemRepo.insertAll(stratagemsModels)
        }
      })
    }

    if (negativeTraits) {
      const negativeTraitModels = map(negativeTraits, createModel(negativeTraitModel))
      const negativeLength = negativeTraitModels.length
      negativeTraitRepo.deleteByPlayerId(playerId).then(() => {
        if (negativeLength > 0) {
          return negativeTraitRepo.insertAll(negativeTraitModels)
        }
      })
    }

    if (martialSkills) {
      const martialSkillModels = map(martialSkills, createModel(martialSkillModel))
      const martialsLength = martialSkillModels.length
      martialSkillRepo.deleteByPlayerId(playerId).then(() => {
        if (martialsLength > 0) {
          return martialSkillRepo.insertAll(martialSkillModels)
        }
      })
    }

    if (specialTechniques) {
      const specialTechniqueModels = map(specialTechniques, createModel(specialTechniqueModel))
      const specialLength = specialTechniqueModels.length
      specialTechRepo.deleteByPlayerId(playerId).then(() => {
        if (specialLength > 0) {
          return specialTechRepo.insertAll(specialTechniqueModels)
        }
      })
    }

    if (noblePhantasms) {
      const noblePhantasmsModels = map(noblePhantasms, createModel(npModel))
      if (noblePhantasmsModels.length > 0) {
        const npIds = await npRepository(db).insertAll(noblePhantasmsModels)
        const npTypes = noblePhantasms.map(el => el.type)
        const npSpecialStrikes = noblePhantasms.map(el => el.specialStrike)
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

          npTypeRepository(db).insertAll(npTypeModels)
        }

        if (npSpecialStrikes.length > 0) {
          const npSpecialStrikeModels = npSpecialStrikes.map((s, i) => npSpecialStrikeModel({
            ...s,
            np_id: npIds[i]
          }))

          npSpecialStrikeRepository(db).insertAll(npSpecialStrikeModels)
        }

        const npEffectModels = npEffects.flatMap(e => e.effect.map(ef => npEffectModel({
          id: ef.id || null,
          name: ef.name || '',
          valors: ef.valors,
          effect: ef.effect,
          np_id: e.np_id
        })))

        const npeLength = npEffectModels.length
        const npEffectsDeletionPromise = new Promise((resolve, rejet) =>
          noblePhantasms.forEach(np =>
            resolve(npEffectsRepo.deleteById(np.id))
          )
        )

        npEffectsDeletionPromise.then(() => {
          if (npeLength > 0) {
            npEffectRepository(db).insertAll(npEffectModels)
          }
        })
      }
    }

    let categoriesLength = 0
    let categoryModels = []
    if (extraInfos.stories) {
      categoryModels = extraInfos.stories.flatMap(el => category({
        id: el.id || null,
        name: el.name,
        content: el.content,
        subcategory: el.subcategory,
        children: el.children,
        player_id: playerId
      })).filter(cat => cat.name != '')

      categoriesLength = categoryModels.length
    }


    categoriesRepo.deleteAllByPlayerId(playerId).then(() => {
      if (categoriesLength > 0) {
        return categoriesRepo.insertAll(categoryModels)
      }
    })

    return res.json({
      statusMessage: 'success',
      data: 'Uma nova ficha foi cadastrada com sucesso',
      playerId
    })

  }).catch(error => {
    console.log(error)
    return res.status(500).json({
      statusMessage: 'error',
      data: `Ocorreu um problema ao tentar cadastrar uma nova ficha: ${error}`
    })
  })
})

app.post('/api/upload/:playerId', async (req, res) => {
  let playerId = null
  const form = new IncomingForm({ multiples: true })
  const imageRepo = imageRepository(db)

  if ({ playerId } = req.params) {
    const result = await playerRepository(db).getById(playerId)

    if (result.length < 1) {
      return res.status(400).json({
        data: {
          message: 'ID do usuário inválido',
          statusMessage: 'error'
        }
      })
    }

    const removeImages = () => new Promise((resolve, reject) =>
      resolve(imageRepo.deleteAllByPlayerId(playerId))
      // imageRepo.getImagesByPlayerId(playerId).then(imgs => {
      // resolve().then(() =>
      /*imgs.forEach(i => unlink(`./uploads/${i.img}`, (err) => {
        if (err) return reject(err)
        console.log(`Removed the image: ${i.img}`)
      }))
    ))*/
      /*}*/
    )
    const uploadPromise = () => new Promise((resolve, reject) => {
      form.parse(req, async (err, fields, files) => {
        if (err) return reject(err)

        if (files.referenceImages) {
          if (!files.referenceImages.length) {
            files.referenceImages = [files.referenceImages]
          }

          return resolve(files.referenceImages.map(f => {
            const oldPath = f.path
            const newPath = join(__dirname, '..', `/uploads/${f.name}`)

            console.log(f.size)

            if (f.size > 0) {
              copyFile(oldPath, newPath, (err) => {
                if (err) throw err
              })
            }

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

    try {
      await removeImages()
      const imgModels = await uploadPromise()
      await imageRepo.insertAll(imgModels)

      return res.json({
        data: {
          message: 'Upload de imagens efetuado com sucesso',
          statusMessage: 'success'
        }
      })
    } catch (err) {
      console.log(err)
      return res.status(400).json({
        data: {
          message: err,
          statusMessage: 'error'
        }
      })
    }
  }

  return res.status(400).json({
    data: {
      message: 'ID do usuário inválido',
      statusMessage: 'error'
    }
  })
})

export default app