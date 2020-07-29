const express = require('express');
const hkbHistController = require('../controllers/hkbHistController');

const router = express.Router();

router.get('/', hkbHistController.findHkbHistByUserId);
router.post('/', hkbHistController.createHkbHist);
router.put('/', hkbHistController.updateHkbHistById);
router.delete('/', hkbHistController.removeHkbHistById);

module.exports = router;
