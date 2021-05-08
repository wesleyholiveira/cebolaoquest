import { createConnection } from 'mysql'

// const gracefulFunc =  () => {
//     console.log('SIGNAL RECEIVED')
//     console.log('Closing mysql server')
//     mysqlCon.end(err => {
//         if (err) throw err
//         console.log('Closed connection with mysql')
//     })
// }
const mysqlCon = createConnection({
    host: 'localhost',
    user: 'root',
    password: 'wesley001',
    database: 'cebolaoquest'
})

mysqlCon.connect(err => {
    if (err) throw err;
    console.log('Conexão com o banco de dados estabelecida')
})

// process.on('SIGTERM', gracefulFunc)

export default mysqlCon