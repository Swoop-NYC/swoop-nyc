const mongoose = require('mongoose')
const Schema = mongoose.Schema


const itemSchema = new Schema({
    title: {type: String, required: true},
    image: {type: String, required: true},
    description: {type: String, required: true},
    location: {type: String, required: true},
    dropTime: {type: Date, default: Date.now}
})

module.exports = mongoose.model('Item', itemSchema)