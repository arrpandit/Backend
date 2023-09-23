const seller_details = require("../models/seller")
const bcrpyt = require('bcrypt');

async function signUp(req, res) {
    // const newseller =  await seller_details.create({
    //     name : req.body.name,
    //     email : req.body.email,
    //     password : req.body.password
    // })
    //  res.send(newseller)

    // let {name,email,password} = req.body;
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    if (name == "" || email == "" || password == "") {
        return res.send({
            status: "failed",
            message: "Empty input field"
        })
    } else if (!/^[a-zA-Z]*$/.test(name)) {
        return res.send({
            status: "Failed",
            message: "Invalid name"
        })
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
        return res.send({
            status: "Failed",
            message: "Invalid email"
        })
    } else if (password.length > 10) {
        return res.send({
            status: "Failed",
            message: "Password should be less the 10 letter"
        })
    } else {
        //checking user already exists
        await seller_details.find({ email })
            .then(result => {
                if (result.length) {
                    return res.send({
                        status: "Failed",
                        message: "User exists ,user another username"
                    })
                } else {
                    //add new seller
                    let saltRound = 10;
                    bcrpyt.hash(password, saltRound)
                        .then((hashPassword) => {
                            seller_details.create({
                                name: name,
                                email: email,
                                password: hashPassword
                            })
                            return res.send({
                                status: "Success",
                                Message: "New seller created",
                                data:{
                                    name:req.body.name,
                                    email:req.body.email
                                }
                            })
                        })
                        .catch((err) => {
                            return res.send({
                                status: "Failed",
                                message: "Failed to signUp new seller"
                            })
                        })
                }
            })

    }
}

async function login(req, res) {
    // const seller = await seller_details.find({});
    // if(!seller){
    //     return res.send({"Message":"No seller records"});
    // }

    // return res.send(seller)
    
    const email = req.body.email;
    const password = req.body.password;
    // const t = seller_details.find({},{projection:{ email:email }})
    // console.log("t--------ghgbjg-",t);
    if (email == "" || password == "") {
        res.send({
            status: "Failed",
            message: "Empty un or Passowrd"
        })
    } else {
        await seller_details.find({ email })
            .then((seller) => {
                const hashPassword = seller[0].password;
                bcrpyt.compare(password, hashPassword)
                    .then((data) => {
                        if (data) {                          
                            res.json({
                                status: "Success",
                                message: "Seller login successfully",
                                data: seller
                            })
                        } else {
                            res.json({
                                status: "Failed",
                                message: "Invalid password entered",
                                data: data
                            })
                        }

                    })
                    .catch(() => {
                        res.json({
                            status: "failed",
                            message: "Error on password compairing",
                        })
                    })
            })
            .catch(() => {
                res.json({
                    status: "failed",
                    message: "Invalid UN or password",
                })
            })
    }
}

async function allseller(req, res) {
    const sellers = await seller_details.find({});
    return res.send(sellers)
}

async function findById(req,res){
    await seller_details.findById(req.params.id).
    then((result)=>{
        if(result){
            res.json({
                status:"Success",
                login  :result
            })
        }else{
            res.json({
                status:"failed",
                message : `with this id ${req.params.id} seller is Not available`
            })
        }
        
    })
    .catch((err)=>{
        res.send({
            status:"Failed",
            message : "Faild to get seller details"
        })
    })
}

async function deleteSeller(req,res){
    await seller_details.findByIdAndDelete(req.params.id);
    res.send({
        message:`Seller deleted ${req.params.id}`
    })
}


module.exports = {
    signUp,
    login,
    allseller,
    deleteSeller,
    findById
}