const express = require('express');
const router = express.Router();
const config = require('config');
const utils = require('../utils');

/**
 * @route       GET api/videos
 * @desc        Get All List of Videos
 * @access      Public
 */

router.get('/', (req, res) => {
    res.render('video');
});

router.get('/:id', (req, res) => {
    if (!utils.checkRange(req, res)) {
        return;
    }

    const videoName = `video_${req.params.id}.mp4`;
    const videoFile = config.get('VIDEO_PATH') + videoName;
    const file = {
        range: null,
        name: videoName,
        path: videoFile,
        size: 0
    }
    utils.fileToStreem(req, res, file);
});

module.exports = router;