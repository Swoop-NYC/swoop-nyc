const mongoose = require('mongoose')
const Schema = mongoose.Schema


const itemSchema = new Schema({
    title: {type: String, required: true},
    image: {type: Image, required: true},
    description: {type: String, required: true},
    locations: {type: String, required: true},
    dropTime: {type: Date, required: true}
})

module.exports = mongoose.model('Item', itemSchema)