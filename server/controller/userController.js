const User = require('../models/userModel')
const userController = {};

userController.createUser = ()=>{
    //pull the field requirements from the database
    //verify that the request body matches the user schema using mongoose validation
    //when to sanitize input?

    //if valid, add document to user collection
        //ensure user schema is set up as follows:
        // {
        //     username: [String]
        //     password: [String]
        //   }
    //if error, pass to global error handler
}

userController.verifyUser = ()=>{

}


module.exports = userController;

