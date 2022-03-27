const mongoose = require("mongoose")
require('dotenv').config();


//MAP global promise to get rid of warning 
mongoose.Promise = global.Promise;

//connection to the database
process.env.DB
const db = mongoose.connect(process.env.DB)


//import mode
const Customer = require(`./models/customers`)

//add customers
const addCustomer = (customer) => {
    Customer.create(customer).then(customer => {
        console.info(`New Customer added`);
        mongoose.connection.close()
    })
}

//find customers
const findCustomer = (name) =>{
    const search = new RegExp(name, `i`);
    Customer.find({$or: [{firstname: search}, {lastname: search}]})
        .then(customer =>{
            console.info(customer);
            console.info(`${customer.length} matches`)
            mongoose.connection.close()
        })
}


//update a customer
const updateCustomer = (_id, customer) =>{
    Customer.updateOne({_id}, customer)
    .then(customer => {
        console.info("customer updated")
        mongoose.connection.close()
    })
}

//remove a customer
const removeCustomer = (_id) =>{
    Customer.deleteOne({ _id})
    .then(customer => {
        console.info("customer removed")
        mongoose.connection.close()
    })
}

//list all the customers
const listCustomer = () =>{
    Customer.find()
    .then(customers => {
        console.info(customers);
        console.info(`${customers.length} matches`);
        mongoose.connection.close()
    })
}

//exports methods

module.exports = {
    addCustomer,
    findCustomer,
    updateCustomer,
    removeCustomer,
    listCustomer
}