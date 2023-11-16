const User = require('../models/userModel')
const bcrypt = require('bcryptjs')
const userController = {};

//this middleware tests to see if the username and password combination is allowed to be saved
userController.testSignupCreds = (req, res, next) => {
    const {username, password} = req.body.user;
    console.log(password)
    const usernameReg = new RegExp("^(?=.*[!@#$%^&*()_+=[]{};':\",./<>?~`])$");
    const passwordReg = new RegExp("^(?=.*[A-Za-z])(?=.*?[0-9])(?=.*?[?!.'$])[A-Za-z0-9?!.$']{8,}$");
    //"^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d?!.$']{5,}$"
    console.log('this is the username: ', usernameReg.test(username))
    
    console.log('this is the password: ', passwordReg.test(password))
    if (usernameReg.test(username)) {
        console.log('inside the username regex')
        const error = {
            log: 'Username cannot contain any special characters.',
            status: 400,
            message: {err: 'Username did not pass the requirements.'},
        };
        return next(error)
    }
    if (!passwordReg.test(password)) {
        console.log('inside the password regex')
        const error = {
            log: 'Password either contains incorrect special characters, is not the correct length, or does not have at least one letter and one number present. Can only include the following special characters: ?, !, ., $, \'.',
            status: 400,
            message: {err: 'Password did not pass the requirements.'},
        };
        return next(error);
    }
    res.locals.user = {username: username, password: password};
    console.log('made it to the end of the username and password check')
    next();
};

userController.createUser = async (req, res, next) => {
   const {username, password} = res.locals.user
   console.log(username, password);
    const newUser = ({username: username, password:password});
    try {
        const DBresponse = await User.create(newUser);
        res.locals.newUser = DBresponse;
        console.log(DBresponse)
    }
    catch (err) {
        const error = {
            log: 'userController.createUser',
            status: 400,
            message: { error: err.message }
        }
        next(error);
    }
    next();
}


userController.verifyUser = async (req, res, next)=>{
    const {username, password} = req.body.user
    console.log(req.body.username);

    try {
        //verify username exists for creating new user
        const user = await User.find({username: username})

    }
    catch (err) {
        const error = {
            log: 'userController.verifyUser',
            status: 400,
            message: {error: err.message}
        };
        next(error);
    }
    // if (!user) return res.status(404).send({ message: "Invalid username" });
    // console.log('user password', user.password);
    // const passwordIsValid = await bcrypt.compare(
    //     req.body.password, //plain string password
    //     user.password //hashed password in db
    //   );

    // if (!passwordIsValid) {
    // return res.status(401).send({ message: "Invalid password" });
    // }

    // console.log('valid password', passwordIsValid);
    next()
}


module.exports = userController;

