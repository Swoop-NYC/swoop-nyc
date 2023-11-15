const User = require('../models/userModel')
const bcrypt = require('bcryptjs')
const userController = {};

userController.createUser = async (req, res, next) => {
    const {username, password} = req.body.user;
    console.log(username, password);

    // if (username.matches())


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
    console.log(req.body.username);
    //verify username exists for creating new user
    // const user = await User.find({username: req.body.username})

    // console.log(user);
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

