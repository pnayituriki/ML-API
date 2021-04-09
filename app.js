if (process.env.NODE_ENV !== 'production') {
    require("dotenv").config();
}
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const dbConnection = require('./database');
const app = express();

dbConnection();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('layout', 'layouts/layout');
app.use(expressLayouts);
app.use(express.static('public'));

app.get('/', (req, res) => res.send('API Running'));

// Define Routes
app.use('/api', require('./routes/index'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, function () {
    console.log(`Listening on port ${PORT}!`)
});