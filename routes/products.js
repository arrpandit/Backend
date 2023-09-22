const express = require("express");
const product_details = require("../models/product")
const { allProducts, addproduct, updateProduct, getProductByID, deleteProduct } = require("../controllers/product")

const router = express.Router();

//use this way also
// router.get("/", allProducts)
// router.post("/", addproduct)
// router.get("/:id", getProductByID)
// router.patch("/:id", updateProduct)
// router.delete("/:id", deleteProduct)

//use this way also
// router.get("/", allProducts)
// .post("/", addproduct)
// .get("/:id", getProductByID)
// .patch("/:id", updateProduct)
// .delete("/:id", deleteProduct)


//use this way also
router.get("/", allProducts)
.post("/", addproduct)
router.route("/:id")
.get(getProductByID)
.patch(updateProduct)
.delete(deleteProduct)

module.exports = router