
const express = require('express')
const {allUser,userSignup,userLogin,deleteuser,updateUser,getUserByID} = require('../controllers/user')

const router = express.Router();

router.post('/login',userLogin)
.post('/signup',userSignup)
.delete('/:id',deleteuser)
.get('/',allUser)
.put('/:id',updateUser)
.get('/:id',getUserByID)

module.exports = router;