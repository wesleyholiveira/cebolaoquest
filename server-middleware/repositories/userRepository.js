module.exports = (db) => ({
    getUserByUsernameAndPassword: async (username, password) => {
        const query = `SELECT id FROM users WHERE username = ? AND password = ?`;
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
})
