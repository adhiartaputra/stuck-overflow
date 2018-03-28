const mongoose   = require('mongoose')
const Schema     = mongoose.Schema

const answerSchema = new Schema ({
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  question: {
    type: Schema.Types.ObjectId,
    ref: 'Question'
  },
  answer : {
    type: String,
    default: "undescribed answer" 
  },
  votes: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
  point : {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
})

const Answer = mongoose.model( 'Answer',answerSchema )

module.exports = Answer;