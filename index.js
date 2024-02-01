const express= require('express');
const connection=require('./config/db.js');
const productController = require('./controller/productController.js');
const serachController = require('./controller/searchController.js');
const bodyParser = require('body-parser');
const dotenv=require("dotenv").config()
const app=express();

//Database connection
connection();

//middleware
app.use(bodyParser.json());
app.use(express.json());

//endpoints/API/routes
app.use("/product",productController);
app.use("/search",serachController);

const port=5000;
app.listen(port,()=>{
    console.log(`Server running on ${port}`);
})