
const mongoose = require('mongoose');

const qrCodeSchema = new mongoose.Schema({
  appModule: {
    type: String,
    required: true,
    index: true
  },
  title: {
    type: String,
    required: true
  },
  qrContent: {
    type: String,
    required: true
  },
  qrImage: {
    type: String
  },
  data: {
    type: mongoose.Schema.Types.Mixed,
    default: {}
  },
  createdBy: {
    type: String,
    default: 'admin'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('QRCode', qrCodeSchema);

