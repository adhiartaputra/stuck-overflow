const Question = require('../models/Question')
const Answer = require('../models/Answer')

module.exports = {

  getAll: (req, res) => {
    Question.find()
    .populate('userId')
    .exec()
      .then(questions => {
        Answer.find()
        .populate('userId')
        .exec()
          .then(answers => {
            let arrQuestions = []
            questions.forEach(q => {
              let arrAnswers = []
              answers.forEach(a => {
                if (JSON.stringify(q._id) == JSON.stringify(a.questionId)) {
                  arrAnswers.push(a)
                }
              })
              q.answers = arrAnswers
            })
            res.status(200).send({
              msg: 'got data questions',
              questions
            })
          })
          .catch(err => res.status(500).send({
            msg: 'error bang',
            err
          }))
      })
      .catch(err => res.status(500).send(err))
  },

  create: (req, res) => {
    Question.create({
      title: req.body.title,
      description: req.body.description,
      userId: req.headers.id
    })
      .then(questionCreate => res.status(200).send({
        msg: 'question success to create',
        questionCreate
      }))
      .catch(err => res.status(500).send(err))
  },

  vote: (req, res) => {
    Question.findOne({
      '_id': req.params.id
    })
    .exec()
    .then(question => {
      if (question.votes.length > 0) {
        let findVoter = question.votes.filter(q => {
          return q == req.headers.id
        })
        if (findVoter.length > 0) {
          return res.status(500).send({
            msg: 'anda sudah vote'
          })
        }
      }
      question.votes.push(req.headers.id)
      if (req.body.thumbsUp) {
        question.point++
      } else {
        question.point--
      }
      question.save()
        .then(questionSave => res.status(200).send({
          msg: 'vote succeed',
          questionSave
        }))
        .catch(err => res.status(500).send(err))
    })
    .catch(err => res.status(500).send(err))
  },

  getById: (req, res) => {
    Question.findOne({
      '_id': req.params.id
    })
    .exec()
      .then(question => res.status(200).send({
        msg: 'get question succeed',
        question
      }))
      .catch(err => res.status(500).send(err))
  },

  edit: (req, res) => {
    Question.findOneAndUpdate({
      '_id': req.params.id
    }, {
      title: req.body.title,
      question: req.body.question
    })
    .exec()
      .then(isEdit => {
        Question.findOne({
          '_id': req.params.id
        })
          .then(questionEdited => res.status(200).send({
            msg: 'edit success',
            questionEdited
          }))
          .catch(err => res.status(500).send(err))
      })
      .catch(err => res.status(500).send(err))
  },

  destroy: (req, res) => {
    Question.remove({
      '_id': req.params.id
    })
      .then(questionRemove => res.status(200).send({
        msg: 'question have been removed',
        questionRemove
      }))
      .catch(err => res.status(500).send(err))
  }
};