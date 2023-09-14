const query = require('./query')

const done = async(id) => {
    let queryString = `
        UPDATE todo_list SET status = 'done' WHERE id = ${id};
    `
    await query(queryString)
}

module.exports = done