const mongoose = require('mongoose')
const Schema = mongoose.Schema


const userSession = new Schema({
    cookieId: { type: String, required: true, unique: true},
    createdAt: { type: Date, expires: 3600, default: Date.now}
})

module.exports = mongoose.model('Session', userSession)