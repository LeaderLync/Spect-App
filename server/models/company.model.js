/* Import mongoose and define any variables needed to create the schema */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/* Create your schema */
var CompanySchema = new Schema({
  id: String,
  companyName: String,
  companyBio: String,
  selectedIndustries: [String],
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
      jobSkills: {
        first: String,
        second: String,
        third: String
      }
  }],



  created_at: Date,
  updated_at: Date,
});
/* create a 'pre' function that adds the updated_at and created_at if not already there property */
CompanySchema.pre('save', function(next) {
    var currentDate = new Date();
    this.updated_at = currentDate;
    if(!this.created_at)
      this.created_at = currentDate;
    next();
  });

var Company = mongoose.model('Company', CompanySchema);

/* Export the model to make it available to other parts of your Node application */
module.exports = Company;
