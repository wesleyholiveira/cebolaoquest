const insertMultiValuesQuery = require("../utils/insertMultiValuesQuery")

module.exports = (db) => ({
    insertAll: async(imageModels) => {
        console.log(`Inserting on player_images:`)
        console.log(imageModels)

        const query = insertMultiValuesQuery('player_images', imageModels)
        return new Promise((resolve, reject) => {
            db.query(query, (err, result) => {
                if (err) return reject(err)

                console.log('Some new images were inserted successfully')
                return resolve(imageModels)
            })
        })
    }
})