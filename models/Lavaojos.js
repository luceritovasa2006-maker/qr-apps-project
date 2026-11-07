
const mongoose = require('mongoose');

// Esquema para cada pregunta de inspección
const preguntaSchema = new mongoose.Schema({
  pregunta: String,
  cumple: { type: String, enum: ['Cumple', 'No Cumple', ''], default: '' },
  observacion: { type: String, default: '' }
});

// Esquema principal de inspección de Lavaojos
const lavaojosSchema = new mongoose.Schema({
  ubicacion: { type: String, required: true },
  inspector: { type: String, required: true },
  fecha: { type: Date, default: Date.now },
  firma: { type: String, default: '' },
  foto: { type: String, default: '' },
  preguntas: [preguntaSchema]
});

module.exports = mongoose.model('Lavaojos', lavaojosSchema);

