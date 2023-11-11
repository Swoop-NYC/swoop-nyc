const Item = require('../models/itemModel.js');

const itemController = {

    createItem(req, res, next) {
        Item.create(req.body)
        .then((data) => {
            res.locals.newItem = data;
            next()
        })
        .catch((err) => {
            return next({log: 'there is an error it itemController createItem', status: 404, message: {err: 'you are missing information for your created item'}})
        })
    }

};

module.exports = itemController