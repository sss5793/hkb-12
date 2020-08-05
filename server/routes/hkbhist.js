const express = require('express');
const { ensureAuthenticated } = require('../middleware');
const hkbHistController = require('../controllers/hkbhist-controller');

const router = express.Router();

router.get('/', ensureAuthenticated, hkbHistController.findHkbHistByUserId);
router.post('/', hkbHistController.createHkbHist);
router.put('/', hkbHistController.updateHkbHistById);
router.delete('/', hkbHistController.removeHkbHistById);

module.exports = router;
