const insertMultiValuesQuery = require("../utils/insertMultiValuesQuery")

module.exports = (db) => ({
    getCategoriesByPlayerId: async (id) => {
        const query = 'SELECT * FROM player_categories WHERE player_id = ?'
        return new Promise((resolve, reject) => {
            db.query(query, [id], (err, results) => {
                if (err) return reject(err)

                return resolve(results)
            })
        })
    },

    insertAll: async(categoryModels) => {
        console.log(`Inserting on player_categories:`)
        console.log(categoryModels)

        const query = insertMultiValuesQuery('player_categories', categoryModels)
        return new Promise((resolve, reject) => {
            db.query(query, (err, result) => {
                if (err) return reject(err)

                console.log('Some news categories were inserted successfully')
                return resolve(categoryModels)
            })
        })
    }
})