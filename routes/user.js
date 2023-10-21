
const express = require('express')
const {allUser,userSignup,userLogin,deleteuser} = require('../controllers/user')

const router = express.Router();

router.post('/login',userLogin)
.post('/signup',userSignup)
.delete('/delete/:id',deleteuser)
.get('/',allUser)

module.exports = router;