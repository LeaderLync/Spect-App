var mongoose = require('mongoose'),
	Schema = mongoose.Schema;


var studentSchema = new Schema({
    id: String,

    firstName: String,
    lastName: String,

    email: String,
    telephone: String,
    avatarUrl: String,


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
