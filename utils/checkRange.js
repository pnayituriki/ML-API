module.exports = function (req, res) {
    if (!req.headers.range) {
        res.status(400).json({ errors: [{ msg: 'Missing Range Header' }] });
        return false;
    }
    return true;
}