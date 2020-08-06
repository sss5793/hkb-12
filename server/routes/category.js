const express = require('express');
const { ensureAuthenticated } = require('../middleware');
const categoryController = require('../controllers/category-controller');

const router = express.Router();

router.get('/', ensureAuthenticated, categoryController.findCategory);

module.exports = router;
