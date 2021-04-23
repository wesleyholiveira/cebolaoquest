const insertMultiValuesQuery = require("../utils/insertMultiValuesQuery")

module.exports = (db) => ({
    insertAll: async(npTypeModels) => {
        console.log(`Inserting on player_noble_phantasm_types:`)
        console.log(npTypeModels)

        const query = insertMultiValuesQuery('player_noble_phantasm_types', npTypeModels)
        return new Promise((resolve, reject) => {
            db.query(query, (err, result) => {
                if (err) return reject(err)

                return resolve(npTypeModels)
            })
        })
    }
})