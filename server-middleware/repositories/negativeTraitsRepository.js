const insertMultiValuesQuery = require("../utils/insertMultiValuesQuery")

module.exports = (db) => ({
    getNegativeTraitsByPlayerId: async (id) => {
        const query = 'SELECT * FROM player_negative_traits WHERE player_id = ?'
        return new Promise((resolve, reject) => {
            db.query(query, [id], (err, results) => {
                if (err) return reject(err)

                return resolve(results)
            })
        })
    },

    deleteByPlayerId: async (id) => {
        console.log(`Removing (IF EXISTS) all negative traits for the player_id = ${id}`)
        const query = 'DELETE FROM player_negative_traits WHERE player_id = ?'
        return new Promise((resolve, reject) => {
            db.query(query, [id], (err, results) => {
                if (err) return reject(err)

                return resolve(results)
            })
        })
    },

    insertAll: async(negativeTraitsModels) => {
        console.log(`Inserting on player_negative_traits:`)
        console.log(negativeTraitsModels)

        const query = insertMultiValuesQuery('player_negative_traits', negativeTraitsModels)
        return new Promise((resolve, reject) => {
            db.query(query, (err, result) => {
                if (err) return reject(err)

                console.log('A new negative trait was inserted successfully')
                return resolve(negativeTraitsModels)
            })
        })
    }
})