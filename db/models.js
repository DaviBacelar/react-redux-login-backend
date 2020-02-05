const mongoose = require('mongoose');

module.exports = {
    user: mongoose.model('User', {
        name: String,
        username: String,
        password: String,
        created_on: { type : Date, default: Date.now }
    })
}