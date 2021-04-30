const insertMultiValuesQuery = require("../utils/insertMultiValuesQuery")

module.exports = (db) => ({
    getSpecialTechniquesByPlayerId: async (id) => {
        const query = 'SELECT * FROM player_special_techniques WHERE player_id = ?'
        return new Promise((resolve, reject) => {
            db.query(query, [id], (err, results) => {
                if (err) return reject(err)

                return resolve(results)
            })
        })
    },

    deleteByPlayerId: async (id) => {
        console.log(`Removing (IF EXISTS) all special techniques for the player_id = ${id}`)
        const query = 'DELETE FROM player_special_techniques WHERE player_id = ?'
        return new Promise((resolve, reject) => {
            db.query(query, [id], (err, results) => {
                if (err) return reject(err)

                return resolve(results)
            })
        })
    },

    insertAll: async(specialTechniqueModels) => {
        console.log(`Inserting on player_special_techniques:`)
        console.log(specialTechniqueModels)

        const query = insertMultiValuesQuery('player_special_techniques', specialTechniqueModels)
        return new Promise((resolve, reject) => {
            db.query(query, (err, result) => {
                if (err) return reject(err)

                console.log('Some news special techniques were inserted successfully')
                return resolve(specialTechniqueModels)
            })
        })
    }
})