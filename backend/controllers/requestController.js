const Request = require('../models/Request');

// Create a new request
exports.createRequest = async (req, res) => {
    try {
        const request = new Request(req.body);
        await request.save();
        res.status(201).json(request);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get all requests
exports.getRequests = async (req, res) => {
    try {
        const requests = await Request.find();
        res.status(200).json(requests);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
