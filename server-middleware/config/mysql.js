const mysql = require('mysql')

const mysqlCon = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'wesley001',
    database: 'cebolaoquest'
})

mysqlCon.connect(err => {
    if (err) throw err;
    console.log('Conexão com o banco de dados estabelecida')
})

module.exports = mysqlCon