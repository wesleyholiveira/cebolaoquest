const insertMultiValuesQuery = require("../utils/insertMultiValuesQuery")

module.exports = (db) => ({
    insertAll: async(martialSkillModels) => {
        console.log(`Inserting on player_martial_skills:`)
        console.log(martialSkillModels)

        const query = insertMultiValuesQuery('player_martial_skills', martialSkillModels)
        return new Promise((resolve, reject) => {
            db.query(query, (err, result) => {
                if (err) return reject(err)

                return resolve(martialSkillModels)
            })
        })
    }
})