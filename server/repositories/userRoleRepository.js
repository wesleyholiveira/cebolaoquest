module.exports = (db) => ({
    insert: async (userRole) => {
        console.log(`Inserting a new user_roles:`)
        console.log(userRole)
        const query = `
            INSERT INTO user_roles (
                id,
                user_id,
                role_id
            ) VALUES (
                ?,
                ?,
                ?
            ) as new (id, user_id, role_id)
            ON DUPLICATE KEY UPDATE
                id = new.id,
                user_id = new.user_id,
                role_id = new.role_id
        `
        return new Promise((resolve, reject) => {
            const q = db.query(query, [
                userRole.id,
                userRole.userId,
                userRole.roleId
            ], (err, result) => {
                if (err) {
                    console.log(q.sql)
                    console.log(err)
                    return reject(err)
                }

                console.log('A new user_role was inserted successfully')
                return resolve(result.insertId)
            })
        })
    }
})
