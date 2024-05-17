
const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  name: { type: String, required: true },
  size: { type: String, required: true },
  year: { type: String, required: true },
  imageUrl: { type: String, required: true },
  imageType: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Image', imageSchema);
