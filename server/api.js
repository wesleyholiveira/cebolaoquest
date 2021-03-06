require('dotenv').config()

import { copyFile } from 'fs'
import { join } from 'path'
import { createHash } from 'crypto'

import { verify, decode, sign } from 'jsonwebtoken'
import express, { json } from 'express'
import { IncomingForm } from 'formidable'
const app = express()

import map from './utils/mapModel'
import attributeModel from './models/attribute'
import playerModel from './models/player'
import negativeTraitModel from './models/negativeTrait'
import specialTechniqueModel from './models/specialTechnique'
import martialSkillModel from './models/martialSkill'
import stratagemModel from './models/stratagem'
import npModel from './models/np'
import npTypeModel from './models/np_type'
import npEffectModel from './models/np_effect'
import userModel from './models/user'
import secretOriginsModel from './models/secretOrigins'

import attributeRepository from './repositories/attributeRepository'
import playerRepository from './repositories/playerRepository'
import negativeTraitsRepository from './repositories/negativeTraitsRepository'
import specialTechniqueRepository from './repositories/specialTechniqueRepository'
import martialSkillRepository from './repositories/martialSkillRepository'
import stratagemRepository from './repositories/stratagemRepository'
import npRepository from './repositories/npRepository'
import npTypeRepository from './repositories/npTypeRepository'
import npEffectRepository from './repositories/npEffectRepository'
import userRepository from './repositories/userRepository'
import image from './models/image'
import imageRepository from './repositories/imageRepository'
import category from './models/category'
import categoryRepository from './repositories/categoryRepository'
import userRoleRepository from './repositories/userRoleRepository'
import secretOriginsRepository from './repositories/secretOriginsRepository'

const axios = require('axios').default
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
        message: 'O token n??o foi fornecido',
        statusMessage: 'error'
      })
    }

    if (tokenBlacklist.includes(token)) {
      return res.status(500).json({
        message: 'Token indispon??vel para futuros usos',
        statusMessage: 'error'
      })
    }

    try {
      const t = token.split(' ')[1]
      const jwtDecoded = verify(t, process.env.SECRET)
      console.log(req.path, jwtDecoded)
    } catch (err) {
      console.log(err)
      return res.status(401).json({
        message: 'Token inv??lido'
      })
    }
  } catch {
    return res.status(401).json({
      message: 'Token inv??lido'
    })
  }

  return next()
})

app.get('/api/user', async (req, res) => {
  const token = req.headers['authorization'].split(' ')[1]
  const { userId, username, isAdmin, is_active, img, name, max_hp, max_sp, hp, sp, attributes } = decode(token)

  return res.json({
    id: userId,
    username,
    token,
    isAdmin,
    is_active,
    img,
    max_hp,
    max_sp,
    hp,
    sp,
    name,
    attributes
  })
})

app.get('/api/player/name/user/:userId', async (req, res) => {
  console.log('CONSULTANDO DADOS LISTAGEM')
  const { userId } = req.params
  try {
    const token = req.headers['authorization'].split(' ')[1]
    const { isAdmin } = decode(token)

    if (isAdmin) {
      return res.json({ data: await playerRepository.getName() }).end()
    }

    return res.json({ data: await playerRepository.getNameByUserId(userId) }).end()

  } catch (err) {
    console.log(err)
    return res.status(500).json({ err }).end()
  }
})

app.delete('/api/player/:userId', async (req, res) => {
  const { userId } = req.params
  try {
    await playerRepository.deleteById(userId)
    return res.json({
      message: 'Usu??rio excluido com sucesso',
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
    console.log('CONSULTANDO DADOS INDIVIDUAIS')
    const { playerId } = req.params
    const uid = req.params.userId

    const token = req.headers['authorization'].split(' ')[1]
    const { isAdmin } = decode(token)

    if (!playerId || !uid) {
      return res.status(404).json({
        message: 'Usu??rio n??o encontrado',
        statusMessage: 'error'
      })
    }

    let results
    if (isAdmin) {
      results = await playerRepository.getAllByPlayer(playerId)
    } else {
      results = await playerRepository.getAllByPlayerAndUserID({ playerId, userId: uid })
    }

    if (results.length < 1) {
      return res.status(404).json({
        message: 'Usu??rio n??o encontrado',
        statusMessage: 'error'
      })
    }

    const player = results[0]
    const {
      id,
      name,
      principle,
      alignment,
      meritPoints,
      statusPoints,
      proficiencyPoints,
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
      talents,
      userRoleId,
      user_id,
      hp,
      sp,
      maxHp,
      maxSp
    } = player

    const parameters = await attributeRepository.getParametersByPlayerId(id)
    const stratagems = await stratagemRepository.getStratagemsByPlayerId(id)
    const negativeTraits = await negativeTraitsRepository.getNegativeTraitsByPlayerId(id)
    const martialSkills = await martialSkillRepository.getMartialSKillsByPlayerId(id)
    const specialTechniques = await specialTechniqueRepository.getSpecialTechniquesByPlayerId(id)
    const noblePhantasms = await npRepository.getNoblePhantasmsByPlayerId(id)
    const referenceImages = await imageRepository.getImagesByPlayerId(id)
    const npTypeRepo = npTypeRepository
    const npEffectsRepo = npEffectRepository
    const categories = await categoryRepository.getCategoriesByPlayerId(id)
    const secretOrigins = await secretOriginsRepository.getSecretOriginsByPlayerId(id)

    let unitAge = 'anos'

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
        children: cat.children.length > 0 ? cat.children : []
      }))
    }

    const npStructure = await noblePhantasms.map(async np => ({
      ...np,
      type: await npTypeRepo.getNoblePhantasmTypeByNpId(np.id),
      effects: await npEffectsRepo.getNoblePhantasmEffectsByNpId(np.id)
    }))

    const npResults = await Promise.all(npStructure)
    const currentClass = player['class']
    const user = {
      id,
      userRoleId,
      name,
      meritPoints,
      statusPoints,
      proficiencyPoints,
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
      userId: user_id,
      hp,
      sp,
      maxHp,
      maxSp,
      secretOrigins: secretOrigins[0],
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
        referenceImages,
      }
    }

    return res.json({ user })
  } catch (err) {
    console.log(err)
    return res.status(500).json({ message: err, statusMessage: 'error' })
  }
})

app.post('/api/register', async (req, res) => {
  if (!req.body.data || !req.body.data.recaptchaToken) {
    return res.status(401).json({
      message: 'Recaptcha inv??lido',
      statusMessage: 'invalidCaptcha'
    })
  }

  try {

    const { RECAPTCHA_PRIVATEKEY, SECRET } = process.env
    const { recaptchaToken } = req.body.data
    const { data } = await axios.get(
      `https://www.google.com/recaptcha/api/siteverify?secret=${RECAPTCHA_PRIVATEKEY}&response=${recaptchaToken}`
    )

    if (!data.success) {
      return res.status(401).json({
        message: 'Recaptcha inv??lido',
        statusMessage: 'invalidCaptcha'
      })
    }

    const {
      data: {
        username,
        password,
        email,
      }
    } = req.body

    const encryptedPwd = createHash('sha512').update(password + SECRET).digest('hex')
    const user = userModel({
      username: username.trim(),
      password: encryptedPwd.trim(),
      email: email.trim()
    })

    const userId = await userRepository.insert(user)
    await userRoleRepository.insert({
      id: null,
      userId,
      roleId: 1
    })

    return res.json({
      message: 'Usu??rio criado com sucesso',
      statusMessage: 'success'
    })
  } catch (err) {
    console.log(err)
    return res.status(400).json({
      message: err,
      statusMessage: 'error'
    })
  }
})

app.post('/api/logout', async (req, res) => {
  let token = req.headers['authorization']
  if (!token) {
    return res.status(401).json({
      message: 'O token n??o foi fornecido'
    })
  }

  try {
    const t = token.split(' ')[1]
    const jwtDecoded = verify(t, process.env.SECRET)
    if (jwtDecoded) {
      tokenBlacklist.push(token)
      return res.json({
        message: 'Voc?? saiu do sistema',
        statusMessage: 'success'
      })
    }
  } catch (err) {
    console.log(err)
    return res.status(401).json({
      message: 'Token inv??lido',
      statusMessage: 'error'
    })
  }
})

app.post('/api/login', async (req, res) => {

  if (!req.body || !req.body.recaptchaToken) {
    return res.status(401).json({
      message: 'Recaptcha inv??lido',
      statusMessage: 'invalidCaptcha'
    })
  }

  const { SECRET, RECAPTCHA_PRIVATEKEY } = process.env
  const { recaptchaToken } = req.body
  const { data } = await axios.get(
    `https://www.google.com/recaptcha/api/siteverify?secret=${RECAPTCHA_PRIVATEKEY}&response=${recaptchaToken}`
  )

  if (!data.success) {
    return res.status(401).json({
      message: 'Recaptcha inv??lido',
      statusMessage: 'invalidCaptcha',
    })
  }

  const {
    username,
    password
  } = req.body

  try {
    if ((username && password) && username.length > 0 && password.length > 0) {
      const encryptedPwd = createHash('sha512').update(password.trim() + SECRET).digest('hex')
      const users = await userRepository.getUserByUsernameAndPassword(username.trim(), encryptedPwd)
      if (users.length > 0) {
        const result = users.flatMap(el => ({
          userId: el.id,
          roleId: el.role_id
        }))[0]

        const { userId } = result
        const playerResult = await playerRepository.getEssentialInfos(userId)

        let isAdmin = false
        if (result.roleId && result.roleId == 2) {
          isAdmin = true
        }

        const ret = {
          userId,
          username,
          isAdmin,
          ...playerResult
        }

        const token = sign(ret, SECRET, { expiresIn: '3h' })
        return res.json({ ...ret, token })
      }
    }
    return res.status(401).json({ message: 'Usu??rio e/ou senha inv??lidos', statusMessage: 'error' })
  } catch (err) {
    console.log(err)
    return res.status(401).json({ message: 'Dados inv??lidos', statusMessage: 'error' })
  }

})

app.get('/api/player/:id', async (req, res) => {
  console.log('CONSULTANDO DADOS INDIVIDUAIS [PROFILE]')
  const { id } = req.params
  if (!id) {
    return res.status(400).json({
      message: 'Usu??rio inv??lido',
      statusMessage: 'error'
    })
  }

  const results = await playerRepository.getAllByPlayer(id)
  if (!results || results.length < 1) {
    return res.status(404).json({
      message: 'Usu??rio n??o encontrado',
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
    talents,
    hp,
    sp,
    maxHp,
    maxSp,
  } = player

  const parameters = await attributeRepository.getParametersByPlayerId(id)
  const stratagems = await stratagemRepository.getStratagemsByPlayerId(id)
  const negativeTraits = await negativeTraitsRepository.getNegativeTraitsByPlayerId(id)
  const martialSkills = await martialSkillRepository.getMartialSKillsByPlayerId(id)
  const specialTechniques = await specialTechniqueRepository.getSpecialTechniquesByPlayerId(id)
  const noblePhantasms = await npRepository.getNoblePhantasmsByPlayerId(id)
  const referenceImages = await imageRepository.getImagesByPlayerId(id)
  const npTypeRepo = npTypeRepository
  const npEffectsRepo = npEffectRepository
  const categories = await categoryRepository.getCategoriesByPlayerId(id)
  const secretOrigins = await secretOriginsRepository.getSecretOriginsByPlayerId(id)

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
      children: cat.children.length > 0 ? cat.children : []
    }))
  }

  const npStructure = await noblePhantasms.map(async np => ({
    ...np,
    type: await npTypeRepo.getNoblePhantasmTypeByNpId(np.id),
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
    hp,
    sp,
    maxHp,
    maxSp,
    secretOrigins: secretOrigins[0],
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
  const { SECRET } = process.env
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
    hp,
    sp,
    maxHp,
    maxSp,
    secretOrigins
  } = req.body

  const token = req.headers['authorization']
  const playerRepo = playerRepository
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
    userId,
    hp,
    sp,
    maxHp,
    maxSp,
  })

  const attributeRepo = attributeRepository
  const stratagemRepo = stratagemRepository
  const negativeTraitRepo = negativeTraitsRepository
  const martialSkillRepo = martialSkillRepository
  const specialTechRepo = specialTechniqueRepository
  const npEffectsRepo = npEffectRepository
  const categoriesRepo = categoryRepository

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

    if (secretOrigins) {
      console.log(secretOrigins)
      const secretOriginsModels = new Array(secretOriginsModel({ ...secretOrigins, player_id: playerId }))

      if (secretOriginsModels) {
        secretOriginsRepository.insertAll(secretOriginsModels)
      }
    }

    // const currentNps = await npRepository.getNoblePhantasmsByPlayerId(playerId)
    await npRepository.deleteByPlayerId(playerId)

    if (noblePhantasms) {
      const noblePhantasmsModels = map(noblePhantasms, createModel(npModel))
      if (noblePhantasmsModels.length > 0) {
        const npIds = await npRepository.insertAll(noblePhantasmsModels)
        const npTypes = noblePhantasms.map(el => el.type)
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

          npTypeRepository.insertAll(npTypeModels)
        }

        const npEffectModels = npEffects.flatMap(e => e.effect.map(ef => npEffectModel({
          id: ef.id || null,
          name: ef.name || '',
          valors: ef.valors,
          effect: ef.effect,
          np_id: e.np_id
        })))

        const npeLength = npEffectModels.length
        const npEffectsDeletionPromise = new Promise((resolve, reject) =>
          noblePhantasms.forEach(np =>
            resolve(npEffectsRepo.deleteById(np.id))
          )
        )

        npEffectsDeletionPromise.then(() => {
          if (npeLength > 0) {
            npEffectRepository.insertAll(npEffectModels)
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

    const essentialInfos = await playerRepository.getEssentialInfos(userId)
    const realToken = token.split(' ')[1]
    const user = decode(realToken)
    delete user['iat']
    delete user['exp']

    const ret = { ...user, ...essentialInfos }
    const newToken = sign(ret, SECRET, { expiresIn: '3h' })

    return res.json({
      statusMessage: 'success',
      data: 'Uma nova ficha foi cadastrada com sucesso',
      playerId,
      user: {
        ...ret,
        token: newToken
      }
    })

  }).catch(err => {
    console.log(err)
    return res.status(500).json({
      statusMessage: 'error',
      data: `Ocorreu um problema ao tentar cadastrar uma nova ficha: ${error}`
    })
  })
})

app.post('/api/upload/:playerId', async (req, res) => {
  let playerId = null
  const token = req.headers['authorization']
  const form = new IncomingForm({ multiples: true })
  const imageRepo = imageRepository

  if ({ playerId } = req.params) {
    const result = await playerRepository.getById(playerId)

    if (result.length < 1) {
      return res.status(400).json({
        data: {
          message: 'ID do usu??rio inv??lido',
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

      tokenBlacklist.push(token)
      return res.json({
        data: {
          message: 'Upload de imagens efetuado com sucesso',
          statusMessage: 'success',
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
      message: 'ID do usu??rio inv??lido',
      statusMessage: 'error'
    }
  })
})

app.put('/api/player/:playerId', async (req, res) => {
  const { SECRET } = process.env
  const { player } = req.body

  try {
    if (player) {
      const token = req.headers['authorization']
      await playerRepository.resetAllActivePlayer(player.user_id)
      await playerRepository.activePlayer(player.id)

      const essentialInfos = await playerRepository.getEssentialInfos(player.user_id)
      const realToken = token.split(' ')[1]
      const user = decode(realToken)
      delete user['iat']
      delete user['exp']

      const ret = { ...user, ...essentialInfos }
      const newToken = sign(ret, SECRET, { expiresIn: '3h' })

      tokenBlacklist.push(token)
      return res.status(202).json({
        message: 'Dados do jogador atualizados com sucesso',
        statusMessage: 'success',
        user: {
          ...ret,
          token: newToken
        }
      })
    }

    return res.status(400).json({
      message: 'N??o foi poss??vel atualizar os dados do jogador',
      statusMessage: 'error'
    })
  } catch (err) {
    console.log(err)
    return res.status(500).json({
      message: 'Ocorreu um erro ao atualizar as informa????es do jogador',
      statusMessage: 'error'
    })
  }
})


export default app