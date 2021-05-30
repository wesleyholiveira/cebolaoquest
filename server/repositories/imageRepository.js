const insertMultiValuesQuery = require("../utils/insertMultiValuesQuery")

module.exports = (db) => ({
    getImagesByPlayerId: async (id) => {
        const query = 'SELECT * FROM player_images WHERE player_id = ?'
        return new Promise((resolve, reject) => {
            db.query(query, [id], (err, results) => {
                if (err) return reject(err)

                return resolve(results)
            })
        })
    },

    deleteById: async (id) => {
        console.log(`Removing (IF EXISTS) all images by id = ${id}`)
        const query = 'DELETE FROM player_images WHERE id = ?'
        return new Promise((resolve, reject) => {
            db.query(query, [id], (err, results) => {
                if (err) return reject(err)

                return resolve(results)
            })
        })
    },

    deleteAllByPlayerId: async (id) => {
        console.log(`Removing (IF EXISTS) all images by player_id = ${id}`)
        const query = 'DELETE FROM player_images WHERE player_id = ?'
        return new Promise((resolve, reject) => {
            db.query(query, [id], (err, results) => {
                if (err) return reject(err)

                return resolve(results)
            })
        })
    },

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