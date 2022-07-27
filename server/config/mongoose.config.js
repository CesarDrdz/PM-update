
// import mongoose here to config DB.
const mongoose = require('mongoose');

// this is a chain new line for ease of reading...

module.exports = (DB) => {
    mongoose.connect("mongodb://localhost/"+ DB)
        .then(()=> console.log(`${DB} DB connected`))
        .catch( err=> console.log(`ERROR CONNECTING to ${DB}`, err))
}

// now we can copy paste this file its Declared (const db = "products_DB") in server.js and passed into our require, and of course this file as well..