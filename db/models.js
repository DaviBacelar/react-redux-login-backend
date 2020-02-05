const mongoose = require('mongoose');

module.exports = {
    user: mongoose.model('User', {
        name: String,
        email: String,
        username: String,
        password: String,
        created_on: { type : Date, default: Date.now }
    })
}