const insertMultiValuesQuery = require("../utils/insertMultiValuesQuery")

module.exports = (db) => ({
    getParametersByPlayerId: async (id) => {
        const query = 'SELECT * FROM player_attributes WHERE player_id = ?';
        return new Promise((resolve, reject) => {
            db.query(query, [id], (err, results) => {
                if (err) return reject(err)

                return resolve(results)
            })
        })
    },

    insertAll: async (attributeModels) => {
        console.log(`Inserting on player_attributes:`)
        console.log(attributeModels)

        const query = insertMultiValuesQuery('player_attributes', attributeModels)
        return new Promise((resolve, reject) => {
            db.query(query, (err, result) => {
                if (err) return reject(err)

                console.log('A new attribute was inserted successfully')
                return resolve(attributeModels)
            })
        })
    }
})