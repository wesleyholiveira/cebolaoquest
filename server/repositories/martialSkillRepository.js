const insertMultiValuesQuery = require("../utils/insertMultiValuesQuery")
const db = require('../config/mysql')

module.exports = {
    getMartialSKillsByPlayerId: async (id) => {
        const query = 'SELECT * FROM player_martial_skills WHERE player_id = ?'
        return new Promise((resolve, reject) => {
            db.query(query, [id], (err, results) => {
                

                if (err) return reject(err)
                return resolve(results)
            })
        })
    },

    deleteByPlayerId: async (id) => {
        console.log(`Removing (IF EXISTS) all martial skills for the player_id = ${id}`)
        const query = 'DELETE FROM player_martial_skills WHERE player_id = ?'
        return new Promise((resolve, reject) => {
            db.query(query, [id], (err, results) => {
                

                if (err) return reject(err)
                return resolve(results)
            })
        })
    },

    insertAll: async(martialSkillModels) => {
        console.log(`Inserting on player_martial_skills:`)
        console.log(martialSkillModels)

        const query = insertMultiValuesQuery('player_martial_skills', martialSkillModels)
        return new Promise((resolve, reject) => {
            db.query(query, (err, result) => {
                

                if (err) return reject(err)

                console.log('Some news martial skills were inserted successfully')
                return resolve(martialSkillModels)
            })
        })
    }
}