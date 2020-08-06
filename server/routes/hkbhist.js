const express = require('express');
const { ensureAuthenticated } = require('../middleware');
const hkbHistController = require('../controllers/hkbhist-controller');

const router = express.Router();

router.get('/', ensureAuthenticated, hkbHistController.findHkbHistByUserId);
router.post('/', ensureAuthenticated, hkbHistController.createHkbHist);
router.put('/', ensureAuthenticated, hkbHistController.updateHkbHistById);
router.delete('/', ensureAuthenticated, hkbHistController.removeHkbHistById);

module.exports = router;
