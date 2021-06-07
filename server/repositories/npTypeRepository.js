const insertMultiValuesQuery = require("../utils/insertMultiValuesQuery")
const db = require('../config/mysql')

module.exports = {
    getNoblePhantasmTypeByNpId: async (id) => {
        
        const query = `SELECT * FROM player_noble_phantasm_types WHERE np_id = ? LIMIT 1`;
        return new Promise((resolve, reject) => {
            db.query(query, [id], (err, results) => {
                

                if (err) return reject(err)
                return resolve(results[0])
            })
        })
    },

    insertAll: async(npTypeModels) => {
        console.log(`Inserting on player_noble_phantasm_types:`)
        console.log(npTypeModels)

        const query = insertMultiValuesQuery('player_noble_phantasm_types', npTypeModels)
        return new Promise((resolve, reject) => {
            db.query(query, (err, result) => {
                

                if (err) return reject(err)

                console.log('A new noble phantasm type was inserted successfully')
                return resolve(npTypeModels)
            })
        })
    }
}