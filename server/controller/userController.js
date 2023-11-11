const User = require('../models/userModel')
const userController = {};

userController.createUser = async (req, res, next)=>{
    const {username, password} = req.body;
    const login = await User.save(username)
    //pull the field requirements from the database
    //verify that the request body matches the user schema using mongoose validation
    //when to sanitize input?

    //if valid, add document to user collection
    //if error, pass to global error handler
}

userController.verifyUser = async (req, res, next)=>{

}


module.exports = userController;

