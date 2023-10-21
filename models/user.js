const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    product_id: []

})

const user = mongoose.model("user_detail",schema);

module.exports = user;