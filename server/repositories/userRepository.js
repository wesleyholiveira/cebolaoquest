const db = require('../config/mysql')

module.exports = {
    getUserByUsernameAndPassword: async (username, password) => {
        const query = `
            SELECT
                users.id, user_roles.role_id, users.username
            FROM
                users
            JOIN
                user_roles
            ON
                user_roles.user_id = users.id
            JOIN
                roles
            ON
                user_roles.role_id = roles.id
            WHERE
                username = ? AND password = ?`;
        return new Promise((resolve, reject) => {
            db.query(query, [username, password], (err, result) => {
                

                if (err) return reject(err)
                return resolve(result)
            })
        })
    },

    insert: async (userModel) => {
        console.log(`Inserting a new user:`)
        console.log(userModel)
        const query = `
            INSERT INTO users (
                username,
                email,
                password
            ) VALUES (
                ?,
                ?,
                ?
            )
        `
        return new Promise((resolve, reject) => {
            db.query(query, [
                userModel.username,
                userModel.email,
                userModel.password
            ], (err, result) => {
                

                if (err) {
                    if (err.sqlState == "23000") return reject('Usuário já cadastrado com este email/ou usuário')
                    if (err) return reject(err)
                    return
                }
                
                console.log('A new user was inserted successfully')
                return resolve(result.insertId)
            })
        })
    }
}
