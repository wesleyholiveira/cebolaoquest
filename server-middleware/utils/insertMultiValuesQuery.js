const sqlstring = require('sqlstring')
module.exports = (tableName, models) => {
    const keys =  [... new Set(models.flatMap(el => Object.keys(el)))]
    const columns = keys.map(v => `\`${v}\``)
    const values = models.map(model => `(${keys.map(k => sqlstring.escape(model[k])).join()}),`).join('')

    let query = `INSERT INTO \`${tableName}\` (${columns.join(',')}) VALUES ${values}`;
    query = query.slice(0, -1)

    return query
}