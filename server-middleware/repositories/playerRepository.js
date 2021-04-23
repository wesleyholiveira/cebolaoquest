module.exports = (db) => ({
    insert: async (playerModel) => {
        console.log(`Inserting a new player:`)
        console.log(playerModel)
        const query = `
            INSERT INTO players (
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
                ?
            )
        `
        return new Promise((resolve, reject) => {
            db.query(query, [
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
                playerModel.userId
            ], (err, result) => {
                if (err) return reject(err)
                console.log(err)
    
                console.log('A new player was inserted successfully')
                return resolve(result.insertId)
            })
        })
    }
})
