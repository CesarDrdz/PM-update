// import mongoose to build the model
const mongoose = require('mongoose')

// the schema - the rules that the enteries in the bd must follow
const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "must have a {PATH}"],
        minlength: [3, "{PATH} must be 3 charachters long, you provided {VALUE}"]
    },
    price: {
        type: Number,
        required: [true, "price must be entered"],
        min: [1, "You must "]
        // max may be needed
    },
    descript: {
        type: String,
        required: [true, "Description must be filled in!"]
    }
    },{ timestamps: true });

// the model - is what we use to make the acctual queries
const Product = mongoose.model("products", ProductSchema)
// export the model
module.exports = Product;


// validations go here
