const User = require('../models/User')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');
const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);
// const nodemailer = require('../helpers/nodemailer');

module.exports = {
  getAll: (req, res) => {
    User.find()
      .then(users => res.status(200).send({
        msg: 'get all users success',
        users
      }))
      .catch(err => res.status(500).send(err))
  },

  signin: (req, res) => {
    User.findOne({
      email: req.body.email
    })
      .then(user => {
        if (user) {
          if (user.password === req.body.password) {
            jwt.sign({data: user}, process.env.SECRET, (err, token) => {
              res.status(200).send({
                msg: 'login success',
                token
              })
            })
          } else {
            res.status(200).send({
              msg: 'wrong password entered'
            })
          }
        } else {
          res.status(500).send({
            msg: 'wrong email entered'
          })
        }
      })
      .catch(err => res.status(500).send(err))
  },

  signup: (req, res) => {
    User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    })
      .then(userCreate => {
        res.status(200).send({
          msg: 'user create success',
          userCreate
        })
      })
      .catch(err => res.status(500).send(err))
  },

  edit: (req, res) => {
    let objUpdate = {
      ...req.body
    }
    User.findOneAndUpdate({
      '_id': req.params.id
    }, objUpdate)
      .then(userEdit => {
        User.findOne({
          '_id': req.params.id
        })
          .then(user => res.status(200).send({
            msg: 'user edit success',
            user
          }))
          .catch(err => res.status(500).send(err))
      })
      .catch(err => res.status(500).send(err))
  },

  destroy: (req, res) => {
    User.remove({
      '_id': req.params.id
    })
      .then(userRemove => res.status(200).send({
        msg: 'delete user success',
        userRemove
      }))
      .catch(err => res.status(500).send(err))
  },

  getProfile: (req, res) => {
    User.findOne({
      '_id': req.headers.id
    })
      .then(userProfile => res.status(200).send({
        msg: 'get user profile data is succeed',
        userProfile
      }))
      .catch(err => res.status(500).send(err))
  }
}