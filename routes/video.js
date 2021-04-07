const express = require('express');
const path = require('path');
const router = express.Router();
const utils = require('../utils');

/**
 * @route       GET api/videos
 * @desc        Get All List of Videos
 * @access      Public
 */

router.get('/', (req, res) => {
    res.sendFile('video.html', { root: path.join(__dirname, '../view') });
});

router.get('/:id', (req, res) => {
    if (!utils.checkRange(req, res)) {
        return;
    }

    const videoName = `video_${req.params.id}.mp4`;
    const videoFile = process.env.VIDEO_PATH + videoName;
    const file = {
        range: null,
        name: videoName,
        path: videoFile,
        size: 0
    }
    utils.fileToStreem(req, res, file);
});

module.exports = router;