const express = require('express');
const router = express.Router();

// Define Routes
router.use('/video', require('./video'));
router.use('/audio', require('./audio'));
router.use('/book', require('./book'));

module.exports = router;