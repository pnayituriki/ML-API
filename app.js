const express = require('express');
require("dotenv").config();
const app = express();

app.get('/', (req, res) => res.send('API Running'));

// Define Routes
app.use('/api', require('./routes/index'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, function () {
    console.log(`Listening on port ${PORT}!`)
});