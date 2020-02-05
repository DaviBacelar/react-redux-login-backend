const mongoose = require('mongoose');

module.exports = {
    users: mongoose.model('Users', {
        name: String,
        username: String,
        password: String,
        created_on: { type : Date, default: Date.now }
    }),

    dates: mongoose.model('Dates', {
        title: String,
        date: String,
        content: String,
        year: { type: Number, min: 2, max: 4 },
        month: { type: Number, min: 1, max: 2 },
        day: { type: Number, min: 1, max: 2 },
        created_on: { type : Date, default: Date.now }
    }),

    news: mongoose.model('News', {
        title: String,
        date: String,
        content: String,
        year: { type: Number, min: 2, max: 4 },
        month: { type: Number, min: 1, max: 2 },
        day: { type: Number, min: 1, max: 2 },
        created_on: { type : Date, default: Date.now }
    }),

    estudies: mongoose.model('Estudies', {
        title: String,
        date: String,
        content: String,
        year: { type: Number, min: 2, max: 4 },
        month: { type: Number, min: 1, max: 2 },
        day: { type: Number, min: 1, max: 2 },
        created_on: { type : Date, default: Date.now }
    }),

    cenaculos: mongoose.model('Cenaculos', {
        title: String,
        date: String,
        content: String,
        year: { type: Number, min: 2, max: 4 },
        month: { type: Number, min: 1, max: 2 },
        day: { type: Number, min: 1, max: 2 },
        created_on: { type : Date, default: Date.now }
    }),

    prays: mongoose.model('Prays', {
        title: String,
        name: { type: String, default: "Anônimo"},
        date: String,
        content: String,
        coments: Array,
        authorized: Boolean,
        year: { type: Number, min: 2, max: 4 },
        month: { type: Number, min: 1, max: 2 },
        day: { type: Number, min: 1, max: 2 },
        created_on: { type : Date, default: Date.now }
    }),
}