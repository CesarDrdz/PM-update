
// this is the controller 
// all CRUD OPS
// this file makes quiries to the DB 
// using the model 
// import the model (require)

const Product = require("../models/products.model")

// CRUD
module.exports.findAllProducts = (req, res) => {
    // nothing put in the find so it will find everything.
    Product.find()
        .then(allTheProducts => {
            console.log(allTheProducts);
            // Important what we return here is what we will recieve in react!
            res.json(allTheProducts)
        })
        .catch(err => res.json({
            message: "Something went wrong ", error: err
        }))
}
// create 
module.exports.createNewProduct = (req, res) => {
    // db.product.insertOne({setup:" ", punchline: "  "})
    Product.create(req.body)
        .then(newlyCreatedProduct => res.json({ product: newlyCreatedProduct }))
        .catch(err => res.status(400).json({ message: 'Something went wrong', error: err }));
}

// find one 
module.exports.findOneSingleProduct = (req, res) => {

    // this extra var(id) at the end of params must match our route in order for it to work ("/api/products/:id")
    Product.findOne({ _id: req.params.id })
        .then(oneSingleProduct => res.json({ product: oneSingleProduct }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}


// -------UPDATE from the plateform
// module.exports.updateExistingProduct = (req, res) => {
//     product.findOneAndUpdate(
//         { _id: req.params.id },
//         req.body,
//         { new: true, runValidators: true }
//     )
//         .then(updatedProduct => res.json({ product: updatedProduct }))
//         .catch(err => res.json({ message: 'Something went wrong', error: err }));
// }


// UPDATE WITH SENSAI JOHN
module.exports.updateExistingProduct = (req, res) => {
    console.log(req.params);
    // destructuring 
    const { id } = req.params
    Product.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true }).then(updatedProduct => res.json( updatedProduct ))
        .catch(err => res.json({ message: 'Something Went Wrong', error: err }));
}

// DELETE
module.exports.deleteAnExistingProduct = (req, res) => {
    Product.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}