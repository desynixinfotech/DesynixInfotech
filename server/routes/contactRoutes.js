const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

// Define routes for contact
router.post('/submit', contactController.submitContactForm);
router.post('/enquire', contactController.submitProjectEnquiry);

module.exports = router;
