const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    }
})

const seller_details = mongoose.model("seller_details",schema);

module.exports = seller_details;