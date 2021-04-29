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
    getByPlayerAndUserID: async ({ userId, playerId }) => {
        const query = `
            SELECT players.*,
                DATE_FORMAT(birthday, '%Y-%m-%d') as birthday,
                stratagems.id as stratagems_id,
                stratagems.name as stratagems_name,
                stratagems.merits as stratagems_merits,
                stratagems.player_id as stratagems_merits_player_id,
                negative_traits.id as negative_traits_id,
                negative_traits.name as negative_traits_name,
                negative_traits.merits as negative_traits_merits,
                negative_traits.player_id as negative_traits_player_id,
                martial_skills.id as martial_skills_id,
                martial_skills.name as martial_skills_name,
                martial_skills.merits as martial_skills_merits,
                martial_skills.player_id as martial_skills_player_id,
                special_techniques.id as special_techniques_id,
                special_techniques.name as special_techniques_name,
                special_techniques.merits as special_techniques_merits,
                special_techniques.player_id as special_techniques_player_id,
                img.id,
                img.name,
                img.img,
                img.player_id
            FROM
                players
            LEFT JOIN
                player_stratagems stratagems
            ON
                players.id = stratagems.player_id
            LEFT JOIN
                player_negative_traits negative_traits
            ON
                players.id = negative_traits.id
            LEFT JOIN
                player_martial_skills martial_skills
            ON
                players.id = martial_skills.id
            LEFT JOIN
                player_special_techniques special_techniques
            ON
                players.id = special_techniques.id
            LEFT JOIN
                player_images img
            ON
                players.id = img.id
            WHERE
                players.id = ?
            AND
                players.user_id = ?`;
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
            ) ON DUPLICATE KEY
                UPDATE id = VALUES(id),
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
                return resolve(result.insertId)
            })
        })

    }
})
