const mongoose = require('mongoose');
const { Schema } = mongoose;

const MenuDataSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  name: {
    type: String,
    required: true
  },
  category: {
    type: String,
    // required: true
  },
  price: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  file: {
    type: String,
    required: true
  },
});

module.exports = mongoose.model('menuData', MenuDataSchema);
