var mongoose = require('mongoose');

var loginSchema = new mongoose.Schema({
    username: String,
    email: {
        type: String,
        require: true,
        min:6,
        max:255
    },
    password: {
        type: String,
        require: true,
        max: 1024,
        min: 6
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Login', loginSchema);