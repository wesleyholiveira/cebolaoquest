const insertMultiValuesQuery = require("../utils/insertMultiValuesQuery")

module.exports = (db) => ({
    getNoblePhantasmEffectsByNpId: async (id) => {
        const query = 'SELECT * FROM player_noble_phantasm_effects WHERE np_id = ?'
        return new Promise((resolve, reject) => {
            db.query(query, [id], (err, results) => {
                if (err) return reject(err)

                return resolve(results)
            })
        })
    },

    deleteById: async (id) => {
        console.log(`Removing (IF EXISTS) noble phantasm effects for the np_id = ${id}`)
        const query = 'DELETE FROM player_noble_phantasm_effects WHERE np_id = ?'
        return new Promise((resolve, reject) => {
            db.query(query, [id], (err, results) => {
                if (err) return reject(err)

                return resolve(results)
            })
        })
    },

    insertAll: async(npEffectModels) => {
        console.log(`Inserting on player_noble_phantasm_effects:`)
        console.log(npEffectModels)

        const query = insertMultiValuesQuery('player_noble_phantasm_effects', npEffectModels)
        console.log(query)
        return new Promise((resolve, reject) => {
            db.query(query, (err, result) => {
                if (err) return reject(err)

                console.log('A new noble phantasm effect was inserted successfully')
                return resolve(npEffectModels)
            })
        })
    }
})