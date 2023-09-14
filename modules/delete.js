const query = require("./query")

const deleteItem = async(id) => {
    let queryString = `
        DELETE FROM todo_list WHERE id = ${id};
    `
    await query(queryString)    
}

module.exports = deleteItem