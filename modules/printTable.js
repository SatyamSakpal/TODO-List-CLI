const printTable = (max, result) => {
    
    let table = `\nid |tasks${createString(max-4," ")}|status  \n---+-----${createString(max-4,"-")}+--------\n`
    for(let i=0; i<result.length; i++) {
        table += `${result[i].id}${idSpaceString(result[i].id)}|${result[i].task}${createString(max-result[i].length+1," ")}|${result[i].status}\n`
    }
    console.log(table)
}

const createString = (count, char) => {
    let string = '';
    for(let i = 0; i<count; i++) {
        string += char
    }
    return string
}

const idSpaceString = (id) => {
    id = id.toString()
    string = createString(3-id.length," ")
    return string
}

module.exports = printTable