const db = require('../config/mysql')
const bursts = require('../config/bursts').default

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
            players.id, players.name, players.is_active, players.user_id
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
            players.id, players.name, players.is_active, players.user_id
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

    getEssentialInfos: async (userId) => {
        const query = `
        SELECT
            players.id, players.name, players.is_active, player_images.img,
            players.max_hp, players.hp, players.max_sp, players.sp,
            player_attributes.name as attr_name, player_attributes.rank as attr_rank,
            player_attributes.value as attr_value
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
        JOIN
            player_attributes
        ON
            players.id = player_attributes.player_id
        LEFT JOIN
            player_images
        ON
            players.id = player_images.player_id
        WHERE
            players.user_id = ?
        AND
            players.is_active = 1
        AND
            player_attributes.name IN ('AGI', 'LUK', 'NP')
        ORDER BY id DESC LIMIT 3`;
        return new Promise((resolve, reject) => {
            db.query(query, [userId], (err, result) => {
                const firstResult = result[0]

                const newResult = {
                    ...firstResult,
                    attributes: result.map(r => {
                        const burst = bursts[r.attr_name]
                        if (burst && burst.icon) {
                            return {
                                attrIcon: burst.icon,
                                attrRank: r.attr_rank,
                                attrValue: r.attr_value,
                                attrLabel: burst.label
                            }
                        }
                    }).filter(r => r != null)
                }

                if (err) return reject(err)
                return resolve(newResult)
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

    resetAllActivePlayer: async (userId) => {
        console.log(`Updating (IF EXISTS) all 'is_active' field to '0' with user_id = ${userId}`)
        const query = `UPDATE players SET is_active = 0 WHERE user_id = ?`
        return new Promise((resolve, reject) => {
            db.query(query, [userId], (err, results) => {


                if (err) return reject(err)
                return resolve(results)
            })
        })
    },

    activePlayer: async (id) => {
        console.log(`Updating (IF EXISTS) 'is_active' field with player_id = ${id}`)
        const query = `UPDATE players SET is_active = 1 WHERE id = ?`
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