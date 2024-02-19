const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const ClientSchema = new Schema({
  name: { type: String },
  email: { type: String },
  phone: { type: String },
});

module.exports = model('Client', ClientSchema);
