const express = require('express');
const path = require('path');
const router = express.Router();
const utils = require('../utils');

/**
 * @route       GET api/audio
 * @desc        Get All List of audio
 * @access      Public
 */

router.get('/', (req, res) => {
    // res.sendFile('audio.html', { root: path.join(__dirname, '../views') });
    res.render('audio');
});

router.get('/:id', (req, res) => {
    if (!utils.checkRange(req, res)) {
        return;
    }
    const audioName = `audio_${req.params.id}.mp3`;
    const audioFile = process.env.AUDIO_PATH + audioName;
    const file = {
        range: null,
        name: audioName,
        path: audioFile,
        size: 0
    }
    utils.fileToStreem(req, res, file);
});

module.exports = router;