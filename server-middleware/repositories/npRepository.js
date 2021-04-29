const insertMultiValuesQuery = require("../utils/insertMultiValuesQuery")

module.exports = (db) => ({
    insertAll: async(npModels) => {
        console.log(`Inserting on player_noble_phantasms:`)
        console.log(npModels)

        const query = insertMultiValuesQuery('player_noble_phantasms', npModels)
        return new Promise((resolve, reject) => {
            db.query(query, (err, result) => {
                if (err) return reject(err)

                return resolve(new Promise((resolve, reject) => {
                    db.query('SELECT id FROM player_noble_phantasms WHERE player_id = ?', [
                        npModels[0].player_id
                    ], (err, result) => {
                        if (err) reject(err)

                        console.log('Some news noble phantasms was inserted successfully')
                        return resolve(result.map(el => el.id))
                    })
                }))
            })
        })
    }
})