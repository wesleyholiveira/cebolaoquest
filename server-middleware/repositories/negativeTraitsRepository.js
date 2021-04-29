const insertMultiValuesQuery = require("../utils/insertMultiValuesQuery")

module.exports = (db) => ({
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