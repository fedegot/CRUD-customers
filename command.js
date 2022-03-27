#!/usr/bin/env node
const program = require(`commander`)
const {
    prompt
} = require(`inquirer`)
const {
    addCustomer,
    findCustomer,
    updateCustomer,
    removeCustomer,
    listCustomer
} = require(`./index`)



//customer questions

const questions = [
    {
        type: `input`,
        name: `firstname`,
        message: `customer first name`
    },
    {
        type: `input`,
        name: `lastname`,
        message: `customer last name`
    },
    {
        type: `input`,
        name: `phone`,
        message: `customer phone`
    },
    {
        type: `input`,
        name: `email`,
        message: `customer email`
    }
]

program
    .version(`1.0`)
    .description(`Client Managment System`)


// program
//     .command(`add <firstname> <lastname> <phone> <email>`)
//     .alias(`a`)
//     .description(`Add a customer`)
//     .action((firstname, lastname, phone, email) => {
//         addCustomer({firstname, lastname, phone, email})
//     })
program 
    .command(`add`)
    .alias(`a`)
    .description(`Add a customer`)
    .action(()=> {
          prompt(questions).then(answers => addCustomer(answers))
    })

program
    .command(`find <name>`)
    .alias(`f`)
    .description(`Find a customer`)
    .action((name => findCustomer(name)))


program 
    .command(`update <_id>`)
    .alias(`u`)
    .description(`Update a customer`)
    .action((_id)=> {
          prompt(questions).then(answers => updateCustomer(_id, answers))
    })

program
    .command(`remove <_id>`)
    .alias(`r`)
    .description(`Remove a customer`)
    .action((_id => removeCustomer(_id)))

program
    .command(`list`)
    .alias(`l`)
    .description(`List al customers`)
    .action(() => listCustomer())




program.parse(process.argv)