const insertMultiValuesQuery = require("../utils/insertMultiValuesQuery")
const db = require('../config/mysql')

module.exports = {
    getNoblePhantasmSpecialStrikesByNpId: async (id) => {
        const query = 'SELECT * FROM player_noble_phantasm_special_strikes WHERE np_id = ? LIMIT 1'

        return new Promise((resolve, reject) => {
            db.query(query, [id], (err, results) => {
                
                
                if (err) return reject(err)
                return resolve(results[0])
            })
        })
    },

    insertAll: async(npSpecialStrikeModels) => {
        console.log(`Inserting on player_noble_phantasm_special_strikes:`)
        console.log(npSpecialStrikeModels)

        const query = insertMultiValuesQuery('player_noble_phantasm_special_strikes', npSpecialStrikeModels)
        return new Promise((resolve, reject) => {
            db.query(query, (err, result) => {
                

                if (err) return reject(err)

                console.log('A new special strike was inserted successfully')
                return resolve(npSpecialStrikeModels)
            })
        })
    }
}