const fs = require('fs');
module.exports = function (req, res, file) {
    // const audioName = "audio_2.mp3";
    // const audioFile = process.env.AUDIO_PATH + audioName;
    // console.log({ audioFile });
    // const audioSize = fs.statSync(audioFile).size;
    file.range = req.headers.range;
    file.size = fs.statSync(file.path).size;

    // parse Range
    // Example: "bytes=-32324-"
    const CHUNK_SIZE = 10 ** 6; //1MB
    const start = Number(file.range.replace(/\D/g, ""));
    const end = Math.min(start + CHUNK_SIZE, file.size - 1);

    const contentLength = end - start + 1;
    const headers = {
        "Content-Range": `bytes ${start}-${end}/${file.size}`,
        "Accept-Ranges": "bytes",
        "Content-Length": contentLength,
        "Content-Type": "audio/mp3"
    };

    res.writeHead(206, headers);

    const fileStream = fs.createReadStream(file.path, { start, end });
    fileStream.pipe(res);
}