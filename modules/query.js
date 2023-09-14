const {Client, Pool} = require('pg')

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'todo',
    password: 'satyamsakpal3',
    port: 5432
})

const query = async(queryString) => {
    const client = await pool.connect()
    try{
        let result = await client.query(queryString)
        return result.rows
    } catch(err) {
        console.log(err)
        process.exit()
    } finally {
        client.release()
    }
    
}

module.exports = query