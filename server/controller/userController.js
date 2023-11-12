const User = require('../models/userModel')
const bcrypt = require('bcryptjs')
const userController = {};

userController.createUser = async (req, res, next)=>{
    const {username, password} = req.body;

    const newUserInfo = new User ({username: username, password:password})
    const {err, newUser} = await newUserInfo.save();
    if (err) next (err);
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

