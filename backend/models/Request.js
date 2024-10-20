const mongoose = require('mongoose');

const requestSchema = new mongoose.Schema({
    description: { type: String, required: true },
    requesterName: { type: String, required: true },
    priority: { type: Number, required: true },
    status: { type: String, default: 'pending' },
    timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Request', requestSchema);
