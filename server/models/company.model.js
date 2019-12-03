/* Import mongoose and define any variables needed to create the schema */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/* Create your schema */
var CompanySchema = new Schema({
  id: String,
  companyName: String,
  companyBio: String,
  selectedIndustries: [String],
  //URLtoLogo: String, // if time permits
  strongSkills: {
    first: String,
    second: String,
    third: String
  },
  avatarUrl: String,
  jobPosts: [{
      jobID: String,
      jobTitle: String,
      jobDescription: String,
      jobRequirements: String,
      jobLink: String,
  }],

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

  created_at: Date,
  updated_at: Date,
});
/* create a 'pre' function that adds the updated_at and created_at if not already there property */
CompanySchema.pre('save', function(next) {
    var currentDate = new Date();
    this.updated_at = currentDate;
    // if it doesn't exist, add created_at date
    if(!this.created_at)
      this.created_at = currentDate;
    next();
  });

var Company = mongoose.model('TestCompany', CompanySchema);

/* Export the model to make it available to other parts of your Node application */
module.exports = Company;
