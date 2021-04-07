module.exports = function (req, res, next) {
    if (!req.headers.range) {
        return res.status(400).json({ errors: [{ msg: 'Missing Range Header' }] });
    }

    next();
}