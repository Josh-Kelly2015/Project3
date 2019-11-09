const express = require('express')
const users = express.Router()
// const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const UserController = require("../../Controllers/UserController");

const router = require("express").Router();
process.env.SECRET_KEY = 'secret'


const User = require('../../Controllers/userController')
// users.use(cors())



// users.post('/register', (req, res) => {
//   const today = new Date()
//   const userData = {
//     first_name: req.body.first_name,
//     last_name: req.body.last_name,
//     email: req.body.email,
//     password: req.body.password,
//     created: today
//   }

//   User.findOne({
//     email: req.body.email
//   })
//     .then(user => {
//       if (!user) {
//         bcrypt.hash(req.body.password, 10, (err, hash) => {
//           userData.password = hash
//           User.create(userData)
//             .then(user => {
//               res.json({ status: user.email + 'Registered!' })
//             })
//             .catch(err => {
//               res.send('error: ' + err)
//             })
//         })
//       } else {
//         res.json({ error: 'User already exists' })
//       }
//     })
//     .catch(err => {
//       res.send('error: ' + err)
//     })
// })

router
  .route("/")
  .get(UserController.findAll)
  .post(UserController.create);

router
  .route("/:id")
  .get(UserController.findById)
  .put(UserController.update)
  .delete(UserController.remove);


users.get('/:id', (req, res) => {
  User.findById({
    email: req.body.email
  })
    .then(dbModel => {
      if (dbModel) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
          // Passwords match
          const payload = {
            _id: Object._id,
           email: user.email
          }
          let token = jwt.sign(payload, process.env.SECRET_KEY, {
            expiresIn: 1440
          })
          res.send(token)
        } else {
          // Passwords don't match
          res.json({ error: 'User does not exist' })
        }
      } else {
        res.json({ error: 'User does not exist' })
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

users.get('/user', (req, res) => {
  var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)

  User.findOne({
    _id: decoded._id
  })
    .then(user => {
      if (user) {
        res.json(user)
      } else {
        res.send('User does not exist')
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

module.exports = router;