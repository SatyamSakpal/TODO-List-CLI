const help = () => {
    console.log("\n              Commands                |       Description")
    console.log("--------------------------------------+--------------------------")
    console.log("node app --new 'TASK_NAME'            | to add a new todo item")
    console.log("node app --list 'all|pending|done'    | to list the todo items")
    console.log("node app --done 'ID'                  | to update a todo item")
    console.log("node app --delete 'ID'                | to delete a todo item")
    console.log("node app --reset                      | to reset the todo list\n")
}

module.exports = help