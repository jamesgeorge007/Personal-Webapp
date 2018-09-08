import saveResponse   from '../controllers/contact_controller';
import express from 'express';
const router = express.Router();
router.post('/contact', saveResponse);

 module.exports = router;
