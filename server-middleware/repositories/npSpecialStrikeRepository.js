const insertMultiValuesQuery = require("../utils/insertMultiValuesQuery")

module.exports = (db) => ({
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
})