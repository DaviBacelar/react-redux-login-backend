const db = require('../db')
const model = require('../models')
const bcrypt = require('bcrypt');
require('dotenv').config();
mongoose.connect(process.env.MONGO_STRING, {useNewUrlParser: true});
const connection = mongoose.connection;
//mongo


// bcrypt.hash("123456", 10, function(err, hash) {
//     console.log(typeof hash)
// 	db.updateOne("users", {username: "admin"}, {password: hash})
// 	.then(result => console.log(result))
// 	.catch(err => console.log(err))
// });

// db.findOne("dates", {_id: '5d7eda6cd6f7fe27bd00380b'})
// .then(result => console.log(result))
// .catch(err => console.log(err))

db.find("news")
.then(result => console.log(result))
.catch(err => console.log(err))

// db.find("estudies")
// .then(result => console.log(result))
// .catch(err => console.log(err))

// db.find("cenaculos")
// .then(result => console.log(result))
// .catch(err => console.log(err))

// db.find("prays")
// .then(result => console.log(result))
// .catch(err => console.log(err))


// db.findOne("users", {username: "admin"})
// .then(res => {
//     console.log(res)
//     console.log(res.name)
//     console.log(res.username)
//     console.log(res.password)
    
// })
// .catch(err => {
//     console.log(err)
// })

// db.create("news", {title: "teste", date: "01/12/1991"})
// .then(result => console.log(result))
// .catch(err => console.log(err))

// console.log(typeof hashedPwd)

// db.updateOne("users", {username: "admin"}, {password: hashedPwd})
// .then(result => console.log(result))
// .catch(err => console.log(err))

// db.getAll()
// .then(result => console.log(result))
// .catch(err => console.log(err))

// db.findOneAndRemove("users", null)
// .then(result => console.log(result))
// .catch(err => console.log(err))

// db['users'].find(function (err, kittens) {
//     if (err) return console.error(err);
//     console.log(kittens);
// })

// // same as above
// model['users'].findOne({ username: 'admin' }).exec(function (err, kittens) {
//     if (err) return console.error(err);
//     console.log(kittens);
// });


