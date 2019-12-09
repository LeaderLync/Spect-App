var mongoose = require('mongoose'),
	Schema = mongoose.Schema;


var studentSchema = new Schema({
    id: String,

    firstName: String,
    lastName: String,

    email: String,
    telephone: String,

    strongSkills: {
      first: String,
      second: String,
      third: String
    },

    weakSkills: {
      first: String,
      second: String,
      third: String
    },

    selectedIndustries: [String],

    question1: Number,
    question2: Number,
    question3: Number,
    question4: Number,
    question5: Number,
    question6: Number,
    question7: Number,
    question8: Number,
    question9: Number,
    question10: Number,
    question11: Number,
    question12: Number,
    question13: Number,
    question14: Number,
    question15: Number,
    question16: Number,
    question17: Number,
    question18: Number,

    matches: [
      {
        companyId: String,
        companyName: String,
        companyTopSkills: [],
    }],

    updated_at: Date
})


studentSchema.pre('save', function(next) {
  var currentDate = new Date()
  this.updated_at = currentDate
  next()
});

var Student = mongoose.model('Student', studentSchema);

/* Export the model to make it avaiable to other parts of your Node application */
module.exports = Student;
