'use strict'
const Answer = require('../models/Answer')

module.exports = {

  getAll: (req, res) => {
    Answer.find()
    .populate('questionId')
      .then(answers => res.status(200).send({
        msg: 'get all answer success',
        answers
      }))
      .catch(err => res.status(500).send(err))
  },

  create: (req, res) => {
    Answer.create({
      answer: req.body.answer,
      userId: req.headers.userId,
      questionId: req.params.questionId
    })
      .then(answerCreate => res.status(200).send({
        msg: 'answer success to create',
        answerCreate
      }))
      .catch(err => res.status(500).send(err))
  },

  vote: (req, res) => {
    Answer.findOne({
      '_id': req.params.id,
      'questionId': req.params.questionId
    })
      .then(answer => {
        if (answer.votes.length > 0) {
          let findVoter = answer.votes.filter(q => {
            return q == req.headers.userId
          })
          if (findVoter.length > 0) {
            return res.status(500).send({
              msg: 'anda sudah vote'
            })
          }
        }
        answer.votes.push(req.headers.userId)
        if (req.body.thumbsUp) {
          answer.point++
        } else {
          answer.point--
        }
        answer.votes.push(req.headers.userId)
        answer.save()
          .then(answerSave => res.status(200).send({
            msg: 'vote succeed',
            answerSave
          }))
          .catch(err => res.status(500).send(err))
      })
      .catch(err => res.status(500).send(err))
  },

  destroy: (req, res) => {
    Answer.remove({
      '_id': req.params.id
    })
      .then(answerRemove => res.status(200).send({
        msg: 'answer have been removed',
        answerRemove
      }))
      .catch(err => res.status(500).send(err))
  }
};