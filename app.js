const help = require('./modules/help')
const add = require('./modules/new');
const done = require('./modules/done');
const deleteItem = require('./modules/delete');
const reset = require('./modules/reset'); 
const list = require('./modules/list')
const args = process.argv

switch(args[2]) {
    case "--new" : { (async() => {
            if(args[3]) {
                await add(args[3])
                console.log('\nAdded new task to TO-DO list.\n')
                process.exit()
            }
        })()
    }
    break
    case '--done' : { (async() => {
            if(args[3]) {
                await done(args[3])
                console.log('\nUpdated TODO list.\n')
                process.exit()
            }
        })()
    }
    break
    case '--delete' : { (async() => {
            if(args[3]) {
                await deleteItem(args[3])
                console.log('\nDeleted item from TODO list.\n')
                process.exit()
            }
        })()
    }
    break
    case '--reset' :  { (async() => {
                await reset()
                console.log('\nTODO list reseted.\n')
                process.exit()
        })()
    }
    break
    case '--list' :  { (async() => {
            if(args[3]) {
                await list(args[3])
                process.exit()
            }
        })()
    }
    break
    case "--help" : {
        help()
        process.exit()
    }
    default : {
        console.log(`\nNo such command. \nType 'node app --help' for help.`)
        process.exit()
    }
}

