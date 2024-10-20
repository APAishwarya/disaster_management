const mongoose = require('mongoose');

const volunteerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    contact: { type: String, required: true },
    skills: { type: [String], required: true },
});

module.exports = mongoose.model('Volunteer', volunteerSchema);
