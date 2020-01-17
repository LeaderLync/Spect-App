var mongoose = require('mongoose'),
	Schema = mongoose.Schema;


var studentSchema = new Schema({
    id: String,

    firstName: String,
    lastName: String,

    email: String,
    telephone: String,
    avatarUrl: String,
    /*strongSkills: {
      first: String,
      second: String,
      third: String
    },
    avatarUrl: String,
    weakSkills: {
    },*/

    /*weakSkills: {
      first: String,
      second: String,
      third: String
    },*/

		skills: {
			leadership: Number,
			teamwork: Number,
			creativity: Number,
			mindfulness: Number,
			criticalThinking: Number,
			communication: Number,
			globalAwareness: Number,
			timeManagement: Number,
			workEthic: Number
		},

    selectedIndustries: [],

    /*question1: Number,
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
    question18: Number,*/

    matches: [
      {
        jobId: String,
        companyName: String,
				jobTitle: String,
				jobDescription: String,
				jobRequirements: String,
				jobLink: String,
				avatarUrl: String
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
