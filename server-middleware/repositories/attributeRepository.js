const insertMultiValuesQuery = require("../utils/insertMultiValuesQuery")

module.exports = (db) => ({
    insertAll: async(attributeModels) => {
        console.log(`Inserting on player_attributes:`)
        console.log(attributeModels)

        const query = insertMultiValuesQuery('player_attributes', attributeModels)
        return new Promise((resolve, reject) => {
            db.query(query, (err, result) => {
                if (err) return reject(err)

                return resolve(attributeModels)
            })
        })
    }
})