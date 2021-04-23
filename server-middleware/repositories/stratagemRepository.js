const insertMultiValuesQuery = require("../utils/insertMultiValuesQuery")

module.exports = (db) => ({
    insertAll: async(stratagemModels) => {
        console.log(`Inserting on player_stratagems:`)
        console.log(stratagemModels)

        const query = insertMultiValuesQuery('player_stratagems', stratagemModels)
        console.log(query)
        return new Promise((resolve, reject) => {
            db.query(query, (err, result) => {
                if (err) return reject(err)

                return resolve(stratagemModels)
            })
        })
    }
})