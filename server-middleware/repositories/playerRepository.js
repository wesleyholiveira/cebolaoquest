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
                if (err) return reject(err)
                console.log(err)
    
                console.log('A new player was inserted successfully')
                return resolve(result.insertId)
            })
        })
    }
})
