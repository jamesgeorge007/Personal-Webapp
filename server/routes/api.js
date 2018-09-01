const saveResponse  = require('../controllers/contact_controller');
const express = require('express');
const router = express.Router();
router.post('/contact', saveResponse);

 module.exports = router;