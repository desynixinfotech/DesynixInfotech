const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');

// Routes for portfolio
router.get('/', projectController.getAllProjects);
router.get('/:id', projectController.getProjectById); // Example detail route

module.exports = router;
