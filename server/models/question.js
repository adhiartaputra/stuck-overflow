const mongoose   = require('mongoose')
const Schema     = mongoose.Schema

const questionSchema = new Schema ({
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  title: {
    type: String,
    default: "untitled question",
    required: true
  },
  description: {
    type: String,
    default: "undescribed question" ,
    required: true
  },
  answers: [],
  point: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
})

const Question = mongoose.model( 'Question',questionSchema )

module.exports = Question;