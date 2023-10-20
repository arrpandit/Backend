
const express = require('express')
const {userSignup,userLogin,deleteuser} = require('../controllers/user')

const router = express.Router();

router.post('/login',userLogin)
.post('/signup',userSignup)
.delete('/delete',deleteuser)

module.exports = router;