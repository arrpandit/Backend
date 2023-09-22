const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name: {
        type: String
    },
    price: {
        type: Number
    },
    color: {
        type: String
    },
    category: {
        type: String
    },
    description: {
        type: String
    },
    image :{
        type:String
    },
    // _id:{
    //     type:String
    // }
})

const product_details = mongoose.model("product_details", schema); //parameter of model is collection name


module.exports = product_details;