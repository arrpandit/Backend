const user_detail = require('../models/user')


async function userLogin(req, res) {
    const email = req.body.email
    const password = req.body.password
    let result = await user_detail.find({ email })
    console.log("result-----------", result)
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
    console.log("body--------------", req.body)
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
    const email = req.body.email
    let result = await user_detail.deleteOne({ email });
    if (result) {
        res.send({ "Message": `User Not present with ${email}` })
    }

    res.send({ "Message": "User deleted", "Data": email })
}

module.exports = {
    userLogin,
    userSignup,
    deleteuser
}