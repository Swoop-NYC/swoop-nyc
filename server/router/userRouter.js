const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');

// //GET user info
// router.post('/login', userController.verifyUser, (req, res)=>{
//     res.status(200).send('login successful') //if successful, redirect user to home
// })

//POST - create a new user
router.post('/', userController.createUser, (req, res)=>{
    res.redirect('/listings')
})

module.exports = router;

