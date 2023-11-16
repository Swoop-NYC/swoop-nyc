const mongoose = require('mongoose')
const Schema = mongoose.Schema


const itemSchema = new Schema({
    title: {type: String, required: true},
    image: {type: String, required: false},
    description: {type: String, required: true},
    location: {type: Array, required: true},
    dropDate: {type: Date, default: Date.now},
    expireAt: {type: Date, expires: '1d'},
    isFav: {type: Boolean, default: false}
})

module.exports = mongoose.model('Item', itemSchema)