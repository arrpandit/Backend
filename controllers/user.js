const user_detail = require('../models/user')
const axios = require('axios')

async function allUser(req, res) {
    const result =await user_detail.find({});
    return res.json({ "message": "Request success", "Data": result })
}
async function userLogin(req, res) {
    const email = req.body.email
    const password = req.body.password
    let result = await user_detail.find({ email , password })
    if (result) {
        return res.json({
            status: "Success",
            message: "Seller login successfully",
            name: result[0].name,
            email: result[0].email,
            // data : result[0].name
        })
    }

    return res.send({ "message": "User not found" })
}

async function userSignup(req, res) {
    const name = req.body.name;
    const email = req.body.email
    const password = req.body.password
    await user_detail.create({ name, email, password });
    // console.log("user------created",req.body);
    return res.send({
        status: "Success",
        Message: "New seller created",
        name: req.body.name,
        email: req.body.email
        // data: {

        // }
    })
}

async function getUserByID(req,res){
    const id = req.params.id;
    console.log("get user by id----------",id)
    const response = await user_detail.findById(id)
    if(response){
        return res.send({"Status":"Success","data" : response})
    }
    return res.send({"Status":"Success","data" : "Not Found"})

    
}

async function deleteuser(req, res) {
    // console.log("res------sss-----",req.params.id)
    let id = req.params.id
    // const email = req.body.email
    let result = await user_detail.findByIdAndDelete({_id:id});
    if (!result) {
        res.send({ "Message": `User Not present with ${id}` })
    }

    res.send({ "Message": "User deleted", "Data": id })
}


async function updateUser(req,res){
    const id = req.params.id;
    const name = req.body.name;
    console.log("new name to update-----------",name+"    "+id);
    const newVal = {$set : {name:name}}
    // const email = req.body.email;
    // const response = await user_detail.updateOne({name:"Manish"},{$set:{name : name}})
    const response = await user_detail.findByIdAndUpdate({_id:id},{$set:{name : name}})
    if(response){
        return res.send({"Status" : "success"})
    }else{
        return res.send({"Status" : "faild","Error" : err})
    }
    
}

module.exports = {
    allUser,
    userLogin,
    userSignup,
    deleteuser,
    updateUser,
    getUserByID
}