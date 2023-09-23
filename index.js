const express = require('express');
const cors = require('cors')
const productApirouter = require('./routes/products')
const sellerApiRouter = require("./routes/seller")
const {mongooseConn} = require('./connection')
const {logs} = require('./middleware/product')
const app = express();
app.use(cors());
require('dotenv').config()

const path = require('path')
// app.use(express.static(path.join(__dirname,'build path)))
app.use(express.static(path.join(__dirname,"./dist/e-shop")))

const url = process.env.DB_URL


//middleware
app.use(logs("logs.txt"))
app.use(express.json({ extended: false }))

//mongo
mongooseConn("mongodb+srv://root1234:root@e-shop.aqq2esu.mongodb.net/?retryWrites=true&w=majority")
// .then(()=>console.log("Mongo Connected"))
// .catch(()=>console.log("Error in mongoDB conn"))

//route
app.use('/products',productApirouter)
app.use("/seller",sellerApiRouter)


//server listen
app.listen(5000, () => {
    console.log(`server running at port ${5000}`)
})