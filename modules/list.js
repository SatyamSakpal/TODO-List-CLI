const printTable = require("./printTable")
const query = require("./query")

const list = async(status) => {
    status = status.toLowerCase()

    switch(status) {
        case 'all' : {
            queryString = `
                SELECT MAX(LENGTH(task)) FROM todo_list;
            `
            let maxLen = await query(queryString)
            queryString = `
                SELECT *,LENGTH(task) FROM todo_list;
            `
            let result = await query(queryString)
            printTable(maxLen[0].max, result)
        }
        break
        case 'pending': {
            queryString = `
                SELECT MAX(LENGTH(task)) FROM todo_list WHERE status = 'pending';
            `
            let maxLen = await query(queryString)
            queryString = `
                SELECT *,LENGTH(task) FROM todo_list WHERE status = 'pending';
            `
            let result = await query(queryString)
            printTable(maxLen[0].max, result)
        }
        break
        case 'done': {
            queryString = `
                SELECT MAX(LENGTH(task)) FROM todo_list WHERE status = 'done';
            `
            let maxLen = await query(queryString)
            queryString = `
                SELECT *,LENGTH(task) FROM todo_list WHERE status = 'done';
            `
            let result = await query(queryString)
            printTable(maxLen[0].max, result)
        }
    }
}

module.exports = list