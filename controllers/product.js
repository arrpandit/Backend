const product_details = require('../models/product')

async function allProducts(req,res){
    const allproducts =  await product_details.find({})
    return res.send(allproducts).status(200);
} 

async function addproduct(req,res){
    const result = await product_details.create({
        name: req.body.name,
        price: req.body.price,
        color: req.body.color,
        category:req.body.category,
        description:req.body.description,
        image:req.body.image
    })
    return res.status(201).json({msg : "Success"})
}

async function getProductByID(req,res){
    const product = await product_details.findById(req.params.id)
    if(!product){
        return res.status(400).send({"msg" : "Not find by id"})
    }
    return res.json(product)
}

async function updateProduct(req,res){
    const data = req.params.id
    const updatedProducts = await product_details.findByIdAndUpdate(req.params.id,{name : "Rahula"});
    //will check
    // const updatedProducts = await product_details.updateOne({id:data},{
    //     name: req.body.name,
    //     price: req.body.price,
    //     color: req.body.color,
    //     category:req.body.category,
    //     description:req.body.description,
    //     image:req.body.image
    // });
    if(!updatedProducts){
        return res.send({Msg : "Product not available"})
    }
    console.log("update----",data);
    return res.send(updatedProducts);
}

async function deleteProduct(req,res){
    const id = req.params.id
    await product_details.deleteOne({id:id});
    return res.send({ msg: "Deleted" })
}


module.exports = {
    allProducts,
    addproduct,
    getProductByID,
    updateProduct,
    deleteProduct
}