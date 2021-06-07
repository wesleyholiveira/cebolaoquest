const insertMultiValuesQuery = require("../utils/insertMultiValuesQuery")
const db = require('../config/mysql')

module.exports = {
    getStratagemsByPlayerId: async (id) => {
        const query = 'SELECT * FROM player_stratagems WHERE player_id = ?';
        return new Promise((resolve, reject) => {
            db.query(query, [id], (err, results) => {
                

                if (err) return reject(err)
                return resolve(results)
            })
        })
    },

    deleteByPlayerId: async (id) => {
        console.log(`Removing (IF EXISTS) all stratagems for player_id = ${id}`)
        const query = 'DELETE FROM player_stratagems WHERE player_id = ?'
        return new Promise((resolve, reject) => {
            

            db.query(query, [id], (err, results) => {
                if (err) return reject(err)

                return resolve(results)
            })
        })
    },

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
}