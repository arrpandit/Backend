const seller_details = require("../models/seller")

async function addSeller(req,res){
    const newseller =  await seller_details.create({
        name : req.body.name,
        email : req.body.email,
        password : req.body.password
    })
     res.send(newseller)
}

async function getSellerDetails(req,res){
    const seller = await seller_details.find({});
    if(!seller){
        return res.send({"Message":"No seller records"});
    }

    return res.send(seller)
}


module.exports = {
    addSeller,
    getSellerDetails
}