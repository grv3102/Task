var mongoose = require('mongoose');

var apiSchema = new mongoose.Schema({
    input: String,
    username: String,
    message: String,
    attempts: Number
});

module.exports = mongoose.model('Api', apiSchema);