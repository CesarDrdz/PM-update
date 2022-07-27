// import the controllers to use the instantiated model
const ProductsController = require("../controllers/products.controller")
console.log(ProductsController);

module.exports = (app) => {
    app.get("/api/products", ProductsController.findAllProducts)
    app.post("/api/products", ProductsController.createNewProduct)
    app.get("/api/products/:id", ProductsController.findOneSingleProduct)
    app.put("/api/products/:id", ProductsController.updateExistingProduct)
    app.delete("/api/products/:id", ProductsController.deleteAnExistingProduct)
}