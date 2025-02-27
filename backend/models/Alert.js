const mongoose = require('mongoose');

const alertSchema = new mongoose.Schema({
    message: { type: String, required: true },
    location: { type: String, required: true },
    severity: { type: String, required: true },
    timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Alert', alertSchema);
