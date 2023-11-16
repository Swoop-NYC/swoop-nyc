const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');

// //GET user info
router.post('/login', userController.verifyUser, userController.createSession, (req, res) => {
    if (res.locals.found) {
        const cookieInfo = res.locals.cookieInfo;
        res.cookie(session, cookieInfo, { maxAge: 60, HttpOnly: true});
        res.sendStatus(200);

    } else res.sendStatus(404);
})

//POST - create a new user
router.post('/', userController.testSignupCreds, userController.createUser, userController.createSession, (req, res) => {
    const cookieInfo = res.locals.cookieInfo;
    res.cookie(session, cookieInfo, { maxAge: 60, HttpOnly: true});
    res.sendStatus(200)
})

module.exports = router;

