require('dotenv').config();
const express = require('express')
const port = 3000;
const db = require("./db/db")
const bodyParser = require('body-parser')
const parseurl = require('parseurl')
const cors = require('cors');

//bcrypt
const bcrypt = require('bcryptjs');
const saltRounds = 10;

//mongo
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_STRING, {useNewUrlParser: true})
.catch(err => console.log(err));

var connection = mongoose.connection;

if(!connection)
    console.log("Error connecting db")
else
    console.log("DB connected successfully")

const server = express()

server.use(bodyParser.json());

server.use(cors());

server.get('/', (req, res) => {
  return res.send("Online!");
}) 

server.post('/api/tests/login-react-redux/login', (req, res) => {
  db.findOne("user", {
      email: req.body.email
  })
  .then(result => {
    if(result) {
      if(Object.keys(result).length > 0) { 
        bcrypt.compare(req.body.password, result.password, (err, isValid) => {
          if (err) {
            return reject({message: "Nome de Usuário ou Senha Incorretos."})
          }

          else if (!isValid) {
            return reject({message: "Nome de Usuário ou Senha Incorretos."})
          }

          else {
            return resolve(result)
          }
        })
      }

      else {
        return reject({message: "Nome de Usuário ou Senha Incorretos."})
      }
    }

    else {
      return reject({message: "Nome de Usuário ou Senha Incorretos."})
    }
  })
  .catch(err => {
      res.status(400)
      res.send(err)
  })
})

server.post('/api/tests/login-react-redux/register', (req, res) => {
  let values = req.body;

  bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(values.password, salt, function(err, hash) {
      if(err) {
        res.statusCode = 500;
        res.send(err);
      }

      else {
        values.password = hash
        db.create('user', values)
        .then(result2 => {
          res.statusCode = 200;
          res.send(result2);
        })
        .catch(err2 => {
          res.statusCode = 504;
          res.send(err2);
        })
      }
    });
  });
})

server.get('*', (req, res) => {
  res.send("Online")
})

server.listen(port, err => {
  if (err) throw err
  console.log(`> Ready on http://localhost:${port}`)
})