
const express = require("express")
const {signUp,login,allseller,deleteSeller,findById} = require("../controllers/seller")

const app = express();

const router = express.Router();

router.post("/signup",signUp)
.post("/login",login)
.get("/",allseller)
.delete("/:id",deleteSeller)
.get("/:id",findById)


module.exports = router