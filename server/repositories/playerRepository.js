const db = require('../config/mysql')

module.exports = {
    getById: async (id) => {
        const query = `
            SELECT 
                players.id
            FROM
                players
            JOIN
                user_roles
            ON
                user_roles.user_id = players.user_id
            JOIN
                roles
            ON
                user_roles.role_id = roles.id
            WHERE
                players.id = ?
            ORDER BY id DESC`;
        return new Promise((resolve, reject) => {
            db.query(query, [id], (err, result) => {
                

                if (err) return reject(err)
                return resolve(result)
            })
        })
    },

    getNameByUserId: async (id) => {
        const query = `
        SELECT
            players.id, players.name
        FROM
            players
        JOIN
            user_roles
        ON
            user_roles.user_id = players.user_id
        JOIN
            roles
        ON
            user_roles.role_id = roles.id
        WHERE
            players.user_id = ?
        ORDER BY id DESC`;
        return new Promise((resolve, reject) => {
            db.query(query, [id], (err, result) => {
                

                if (err) return reject(err)
                return resolve(result)
            })
        })
    },

    getName: async () => {
        const query = `
        SELECT
            players.id, players.name
        FROM
            players
        JOIN
            user_roles
        ON
            user_roles.user_id = players.user_id
        JOIN
            roles
        ON
            user_roles.role_id = roles.id
        ORDER BY id DESC`;
        return new Promise((resolve, reject) => {
            db.query(query, (err, result) => {
                

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

    getAllByPlayer: async (playerId) => {
        const query = `
            SELECT
                players.*, DATE_FORMAT(birthday, '%Y-%m-%d') as birthday, user_roles.id as userRoleId,
                max_hp as maxHp, max_sp as maxSp
            FROM
                players
            JOIN
                user_roles
            ON
                user_roles.user_id = players.user_id
            JOIN
                roles
            ON
                user_roles.role_id = roles.id
            WHERE
                players.id = ?
            LIMIT 1`;
        return new Promise((resolve, reject) => {
            db.query(query, [playerId], (err, results) => {
                

                if (err) return reject(err)
                return resolve(results)
            })
        })
    },


    getAllByPlayerAndUserID: async ({ userId, playerId }) => {
        const query = `
            SELECT
                players.*, DATE_FORMAT(birthday, '%Y-%m-%d') as birthday, user_roles.id as userRoleId,
                max_hp as maxHp, max_sp as maxSp
            FROM
                players
            JOIN
                user_roles
            ON
                user_roles.user_id = players.user_id
            JOIN
                roles
            ON
                user_roles.role_id = roles.id
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
                user_id,
                hp,
                sp,
                max_hp,
                max_sp
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
                ?,
                ?,
                ?,
                ?,
                ?
            ) as new
                ON DUPLICATE KEY UPDATE
                id = new.id,
                name = new.name,
                level = new.level,
                exp = new.exp,
                funds = new.funds,
                proficiencyPoints = new.proficiencyPoints,
                statusPoints = new.statusPoints,
                meritPoints = new.meritPoints,
                alignment = new.alignment,
                principle = new.principle,
                class = new.class,
                valorPoints = new.valorPoints,
                species = new.species,
                sex = new.sex,
                height = new.height,
                weight = new.weight,
                locality = new.locality,
                age = new.age,
                blood_type = new.blood_type,
                birthday = new.birthday,
                self_denomination = new.self_denomination,
                talents = new.talents,
                likes = new.likes,
                dislikes = new.dislikes,
                abstract = new.abstract,
                user_id = new.user_id,
                hp = new.hp,
                sp = new.sp,
                max_hp = new.max_hp,
                max_sp = new.max_sp
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
                playerModel.userId,
                playerModel.hp,
                playerModel.sp,
                playerModel.maxHp,
                playerModel.maxSp
            ], (err, result) => {
                
                if (err) return reject(err)

                console.log('A new player was inserted successfully')
                return resolve(result.insertId == 0 ? playerModel.id : result.insertId)
            })

            console.log(q.sql)
        })

    }
}