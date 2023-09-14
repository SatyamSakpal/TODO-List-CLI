const query = require("./query")

const add = async(taskItem)=> {

    queryString = `
        INSERT INTO todo_list(task, status)
        VALUES('${taskItem}', 'pending');
    `
    await query(queryString)
}

module.exports = add



