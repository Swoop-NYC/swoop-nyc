const User = require('../models/userModel')
const Session = require('../models/sessionModel');
const bcrypt = require('bcryptjs')
const userController = {};

//tests the username and password inputs to make sure they pass the requirements 
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
//creates a new document in the user collection
userController.createUser = async (req, res, next) => {
   const {username, password} = res.locals.user
   console.log(username, password);
    const newUser = ({username: username, password:password});
    try {
        const DBresponse = await User.create(newUser);
        res.locals.username = username;
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

//checks to make sure the username exists and that the password matches whats in the DB
userController.verifyUser = async (req, res, next)=> {
    const {username, password} = req.body.user
    console.log('this is the username: ', username);

    try {
        //verify username exists for creating new user
        const user = await User.findOne({username: username})
        if (user.password === password) {
            console.log('password was correct')
            res.locas.found = true;
            res.locals.username = username;
            res.locals.password = password;
        }
        else {
            const error = {
                log: 'userController.verifyUser',
                status: 404,
                message: {error: 'Could not find username or password.'}
            };
            next(error);
        }
        // const passwordIsValid = await bcrypt.compare(
        next()
    }
    catch (err) {
        const error = {
            log: 'userController.verifyUser',
            status: 400,
            message: {error: 'Could not find username or password.'}
        };
        next(error);
    }
};

//creates a session and sends it back to the router 
userController.createSession = async (req, res, next) => {
    const username = res.locals.username;
    try {
        const DBresponse = await Session.create({cookieId: username})
        res.local.cookieInfo = DBresponse.id;
        next();
    }
    catch (err) {
        const error = {
            log: 'userController.createSession',
            status: 400,
            message: {error: err.message}
        };
        next(error);
    }
};

userController.verifyCookie = async (req, res, next) => {
    const { session } = req.cookies;

    try {
        const DBresponse = await Session.findOne({cookieId: session})
        res.locals.found = true;
        next();
    }
    catch (err) {
        const error = {
            log: 'userController.verifyCookie',
            status: 400,
            message: {error: err.message}
        };
        next(error);
    }
};

module.exports = userController;

