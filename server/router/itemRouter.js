const express = require('express');
const router = express.Router();
const itemController = require('../controller/itemController.js');


// router.get('/', (req, res) => {
//     res.status(200).sendFile(path.join(__dirname, '../../build/index.html'))
// })

router.post('/', itemController.createItem, (req, res, next) => {
    console.log('in the router')
    res.status(200).json(res.locals.newItem);
});

// router.get('/', itemController.getAllItems, (req, res, next) => {
//     res.status(200).json(res.locals.getAllItems);
// })

module.exports = router;