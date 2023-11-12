const express = require('express');
const router = express.Router();
const itemController = require('../controller/itemController.js');

router.get('/', (req, res) => {
    res.send(200).sendFile('../index.html');
});
router.post('/', itemController.createItem, (req, res, next) => {
    res.send(200).json(res.locals.newItem);
});

module.exports = router;