const express = require("express");
const product_details = require("../models/product")
const { allProducts, addproduct, updateProduct, getProductByID, deleteProduct,searchProduct ,nothingSearch} = require("../controllers/product")

const router = express.Router();

//use this way also
// router.get("/", allProducts)
// router.post("/", addproduct)
// router.get("/:id", getProductByID)
// router.patch("/:id", updateProduct)
// router.delete("/:id", deleteProduct)

//use this way also
router.get("/", allProducts)
.post("/", addproduct)
.get("/:id", getProductByID)
.put("/:id", updateProduct)
.delete("/:id", deleteProduct)
.get("/search/:id",searchProduct)
// .get("/search",nothingSearch)


//use this way also
// router.get("/", allProducts)
// .post("/", addproduct)
// router.route("/:id")
// .get("/:id",getProductByID)
// .put("/:id",updateProduct)
// .delete("/:id",deleteProduct)

module.exports = router