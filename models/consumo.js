// consumoModel.js
const mongoose = require('mongoose');

const consumoSchema = new mongoose.Schema({
  fecha: String,
  consumo: Number,
  corriente: Number,
  tension: Number
});

const Consumo = mongoose.model('Consumo', consumoSchema);

module.exports = Consumo;
