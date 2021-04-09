const express = require('express');
const { route } = require('./video');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('book');
});

module.exports = router;