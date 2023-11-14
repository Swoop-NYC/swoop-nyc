const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  title: { type: String, required: true },
  image: { type: String, required: false }, //url from supabase
  description: { type: String, required: true },
  location: { type: Array, required: true }, // [borough, neighborhood]
  dropDate: { type: Date, default: Date.now },
  expireAt: { type: Date, expires: '1d' }, // I think this is wrong, full document should expire
});

module.exports = mongoose.model('Item', itemSchema);
