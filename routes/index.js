const express = require('express');
const router = express.Router();

// Define Routes
router.use('/videos', require('./video'));
router.use('/audio', require('./audio'));

module.exports = router;