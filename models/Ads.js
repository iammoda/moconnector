const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AdSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user',
  },
  text: {
    type: String,
    required: true,
  },
  name: {
    type: String,
  },
  avatar: {
    type: String,
  },

  date: {
    type: Date,
    default: Date.now,
  },
  address: {
    type: String,
    required: true,
  },
  price: {
    type: String,
  },
});

module.exports = Ad = mongoose.model('ad', AdSchema);
