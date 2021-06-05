import { createConnection } from 'mysql2'

let mysqlCon = createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USERNAME || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'cebolaoquest'
})

mysqlCon.connect(err => {
  if (err) throw err;
  console.log('Conexão com o banco de dados estabelecida')
})

mysqlCon.on('error', (err) => {
  if (err) {
    console.log('Ocorreu um erro com o banco de dados')
    console.error(err)
    mysqlCon.end((e) => {
      if (e) {
        console.log('Ocorreu um erro ao FINALIZAR a conexão do banco de dados')
        console.error(e)
      }

      mysqlCon = createConnection({
        host: process.env.DB_HOST || 'localhost',
        user: process.env.DB_USERNAME || 'root',
        password: process.env.DB_PASSWORD || '',
        database: process.env.DB_NAME || 'cebolaoquest'
      })
    })
  }
})

export default mysqlCon