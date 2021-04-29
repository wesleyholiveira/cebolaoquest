const insertMultiValuesQuery = require("../utils/insertMultiValuesQuery")

module.exports = (db) => ({
    insertAll: async(specialTechniqueModels) => {
        console.log(`Inserting on player_special_techniques:`)
        console.log(specialTechniqueModels)

        const query = insertMultiValuesQuery('player_special_techniques', specialTechniqueModels)
        return new Promise((resolve, reject) => {
            db.query(query, (err, result) => {
                if (err) return reject(err)

                console.log('Some news special techiniques were inserted successfully')
                return resolve(specialTechniqueModels)
            })
        })
    }
})