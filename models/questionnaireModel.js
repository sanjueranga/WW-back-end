const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name: String,
  questions: [
    {
      question: String,
      answer: String
    }
  ],
  total:Number,
  remark:String
});

const questionnaireSchema = new mongoose.Schema({
  userID: {
    type: String,
    required: true
  },
  email:{
    type:String
  },
  categories: [categorySchema]
});

const Questionnaire = mongoose.model('Questionnaire', questionnaireSchema);

module.exports = Questionnaire;

