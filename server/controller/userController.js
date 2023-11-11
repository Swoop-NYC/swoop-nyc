//import database
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

//user model files
// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// /**
// * Hint: Why is bcrypt required here?
// */
// const SALT_WORK_FACTOR = 10;
// const bcrypt = require('bcryptjs');

// const userSchema = new Schema({
//   username: {type: String, required: true, unique: true},
//   password: {type: String, required: true}
// });

// module.exports = mongoose.model('User', userSchema); 