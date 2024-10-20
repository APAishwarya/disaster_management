const Alert = require('../models/Alert');

// Function to get all flood alerts
const getAllAlerts = async (req, res) => {
    try {
        const alerts = await Alert.find();
        res.json(alerts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Function to create a new alert
const createAlert = async (req, res) => {
    const alert = new Alert({
        title: req.body.title,
        description: req.body.description,
        location: req.body.location,
        severity: req.body.severity
    });

    try {
        const newAlert = await alert.save();
        res.status(201).json(newAlert);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = { getAllAlerts, createAlert };
