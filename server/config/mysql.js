import { createConnection } from 'mysql2'

const mysqlCon = createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USERNAME || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'cebolaoquest'
})

mysqlCon.connect(err => {
  if (err) throw err;
  console.log('Conexão com o banco de dados estabelecida')
})

export default mysqlCon