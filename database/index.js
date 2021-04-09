const mongoose = require('mongoose');

module.exports = function async() {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    });

    const db = mongoose.connection

    db.on('error', error => console.log(error));
    db.once('open', () => console.log('Connected to Mongoose'));
};