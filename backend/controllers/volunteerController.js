const Volunteer = require('../models/Volunteer');

// Function to get all volunteers
const getAllVolunteers = async (req, res) => {
    try {
        const volunteers = await Volunteer.find();
        res.json(volunteers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Function to add a new volunteer
const addVolunteer = async (req, res) => {
    const volunteer = new Volunteer({
        name: req.body.name,
        contact: req.body.contact,
        available: req.body.available
    });

    try {
        const newVolunteer = await volunteer.save();
        res.status(201).json(newVolunteer);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = { getAllVolunteers, addVolunteer };
