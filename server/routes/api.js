const contactController = require('../controllers/contact_controller'); 
const express = require('express');
const router = express.Router();
router.post('/contact', contactController.saveResponse);

 module.exports = router;