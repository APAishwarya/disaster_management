const express = require('express');
const router = express.Router();
const volunteerController = require('../controllers/volunteerController');

router.post('/', volunteerController.addVolunteer);
router.get('/', volunteerController.getVolunteers);

module.exports = router;
