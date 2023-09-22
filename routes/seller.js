
const express = require("express")
const {addSeller,getSellerDetails} = require("../controllers/seller")

const app = express();

const router = express.Router();

router.post("/",addSeller)
.get("/",getSellerDetails)


module.exports = router