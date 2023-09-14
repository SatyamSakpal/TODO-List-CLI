const query = require("./query")

const reset = async() => {
    let queryString = `
        DELETE FROM todo_list ;
        ALTER SEQUENCE todo_list_id_seq RESTART WITH 1;
    `
    await query(queryString)
}

module.exports = reset