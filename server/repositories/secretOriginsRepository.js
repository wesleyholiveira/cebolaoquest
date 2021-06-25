const insertMultiValuesQuery = require("../utils/insertMultiValuesQuery")
const db = require('../config/mysql')

module.exports = {
    getSecretOriginsByPlayerId: async (id) => {
        const query = 'SELECT * FROM player_secret_origins WHERE player_id = ?';
        return new Promise((resolve, reject) => {
            db.query(query, [id], (err, results) => {
                if (err) return reject(err)
                return resolve(results)
            })
        })
    },

    insertAll: async (secretOrigins) => {
        console.log(`Inserting on player_secret_origins:`)
        console.log(secretOrigins)

        const query = insertMultiValuesQuery('player_secret_origins', secretOrigins)
        return new Promise((resolve, reject) => {
            db.query(query, (err, result) => {
                if (err) return reject(err)

                console.log('A new secret origin was inserted successfully')
                return resolve(secretOrigins)
            })
        })
    }
}