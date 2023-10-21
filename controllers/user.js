const user_detail = require('../models/user')
const axios = require('axios')

async function allUser(req, res) {
    const result =await user_detail.find({});
    return res.json({ "message": "Request success", "Data": result })
}
async function userLogin(req, res) {
    const email = req.body.email
    const password = req.body.password
    let result = await user_detail.find({ email })
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

    // const opt = {
    //     method : 'GET',
    //     url : "https://fakestoreapi.com/products"
    // }
    // try{
    //     const response = await axios(opt);
    //     return res.json({"Data" : response.data})

    //     // console.log("data-------------",response.data[0]);
    // }catch{
    //     console.log("error------------")
    //     return res.send({"Status" : "failed"})
    // }

    // console.log("body--------------", req.body)
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

async function deleteuser(req, res) {
    // console.log("res------sss-----",req.params.id)
    let id = req.params.id
    // const email = req.body.email
    let result = await user_detail.deleteOne({ id });
    if (!result) {
        res.send({ "Message": `User Not present with ${id}` })
    }

    res.send({ "Message": "User deleted", "Data": id })
}

module.exports = {
    allUser,
    userLogin,
    userSignup,
    deleteuser
}