const insertMultiValuesQuery = require("../utils/insertMultiValuesQuery")

module.exports = (db) => ({
    insertAll: async(npEffectModels) => {
        console.log(`Inserting on player_noble_phantasm_effects:`)
        console.log(npEffectModels)

        const query = insertMultiValuesQuery('player_noble_phantasm_effects', npEffectModels)
        console.log(query)
        return new Promise((resolve, reject) => {
            db.query(query, (err, result) => {
                if (err) return reject(err)

                return resolve(npEffectModels)
            })
        })
    }
})