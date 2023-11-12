const mongoose = require('mongoose')
const Schema = mongoose.Schema


const itemSchema = new Schema({
    title: {type: String, required: true},
    image: {type: String, required: true},
    description: {type: String, required: true},
    location: {type: Object, required: true},
    dropTime: {type: Date, default: Date.now},
    expireAt: {type: Date, expires: '1d'}
})

module.exports = mongoose.model('Item', itemSchema)