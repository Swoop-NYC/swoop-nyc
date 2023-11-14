const Item = require('../models/itemModel.js');

const itemController = {} 

itemController.createItem = (req, res, next) => {
    console.log('in the itemController, and here are the contents of the request body: ', req.body)
        Item.create(req.body) //makes a new Item document in mongoDB and returns it
        .then((data) => {
            res.locals.newItem = data;
            next();
        })
        .catch((err) => {
            return next({log: 'there is an error it itemController createItem', status: 404, message: {err: err.message}})
        })

    };

    itemController.getAllItems = async (req, res, next) => {

        try{
            let allListings = await Item.find({}) //serve the entire Item collection
            console.log('here are all of the listings: ', allListings)
            res.locals.allListings = allListings
            next()
        }
        catch(e) {
            return next({erro: e})
        }
    }

module.exports = itemController;