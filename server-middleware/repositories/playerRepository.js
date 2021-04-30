module.exports = (db) => ({
    getById: async (id) => {
        const query = `SELECT id FROM players WHERE id = ?`;
        return new Promise((resolve, reject) => {
            db.query(query, [id], (err, result) => {
                if (err) return reject(err)

                return resolve(result)
            })
        })
    },

    getNameByUserId: async (id) => {
        const query = `SELECT id, name FROM players WHERE user_id = ?`;
        return new Promise((resolve, reject) => {
            db.query(query, [id], (err, result) => {
                if (err) return reject(err)

                return resolve(result)
            })
        })
    },

    deleteById: async (id) => {
        console.log(`Removing (IF EXISTS) the player_id = ${id}`)
        const query = 'DELETE FROM players WHERE id = ?'
        return new Promise((resolve, reject) => {
            db.query(query, [id], (err, results) => {
                if (err) return reject(err)

                return resolve(results)
            })
        })
    },

    getAllByPlayerAndUserID: async ({ userId, playerId }) => {
        const query = `
            SELECT players.*, DATE_FORMAT(birthday, '%Y-%m-%d') as birthday
            FROM
                players
            WHERE
                players.id = ?
            AND
                players.user_id = ?
            LIMIT 1`;
        return new Promise((resolve, reject) => {
            db.query(query, [playerId, userId], (err, results) => {
                if (err) return reject(err)

                return resolve(results)
            })
        })
    },

    insert: async (playerModel) => {
        console.log(`Inserting a new player:`)
        console.log(playerModel)
        const query = `
            INSERT INTO players (
                id,
                name,
                level,
                exp,
                funds,
                proficiencyPoints,
                statusPoints,
                meritPoints,
                alignment,
                principle,
                class,
                valorPoints,
                species,
                sex,
                height,
                weight,
                locality,
                age,
                blood_type,
                birthday,
                self_denomination,
                talents,
                likes,
                dislikes,
                abstract,
                user_id
            ) VALUES (
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                ?,
                ?
            ) ON DUPLICATE KEY UPDATE
                id = VALUES(id),
                name = VALUES(name),
                level = VALUES(level),
                exp = VALUES(exp),
                funds = VALUES(funds),
                proficiencyPoints = VALUES(proficiencyPoints),
                statusPoints = VALUES(statusPoints),
                meritPoints = VALUES(meritPoints),
                alignment = VALUES(alignment),
                principle = VALUES(principle),
                class = VALUES(class),
                valorPoints = VALUES(valorPoints),
                species = VALUES(species),
                sex = VALUES(sex),
                height = VALUES(height),
                weight = VALUES(weight),
                locality = VALUES(locality),
                age = VALUES(age),
                blood_type = VALUES(blood_type),
                birthday = VALUES(birthday),
                self_denomination = VALUES(self_denomination),
                talents = VALUES(talents),
                likes = VALUES(likes),
                dislikes = VALUES(dislikes),
                abstract = VALUES(abstract),
                user_id = VALUES(user_id)
        `

        return new Promise((resolve, reject) => {
            const q = db.query(query, [
                playerModel.id,
                playerModel.name,
                playerModel.level,
                playerModel.exp,
                playerModel.funds,
                playerModel.proficiencyPoints,
                playerModel.statusPoints,
                playerModel.meritPoints,
                playerModel.alignment,
                playerModel.principle,
                playerModel.class,
                playerModel.valorPoints,
                playerModel.species,
                playerModel.sex,
                playerModel.height,
                playerModel.weight,
                playerModel.locality,
                playerModel.age,
                playerModel.bloodType,
                playerModel.birthday,
                playerModel.selfDenomination,
                playerModel.talents,
                playerModel.likes,
                playerModel.dislikes,
                playerModel.abstract,
                playerModel.userId
            ], (err, result) => {
                console.log(err)
                if (err) return reject(err)
    
                console.log('A new player was inserted successfully')
                return resolve(result.insertId == 0 ? playerModel.id : result.insertId)
            })

            console.log(q.sql)
        })

    }
})
