
const express = require('express')
const app = express();
const cors = require('cors')
const PORT = 8000;
const DB = "Product2_DB";
// cors, express, mongoose oackages always needed
// ---Middleware---
app.use(express.json(), express.urlencoded({extended:true}));
app.use(cors())
// ---------------

require("./config/mongoose.config")(DB);
// after the db import the routes here
require("./routes/products.routes")(app);

// Start the server (at the end of the file)
app.listen(PORT, () => {
    console.log(`>>> SERVER UP ON PORT ${PORT} <<`);
})