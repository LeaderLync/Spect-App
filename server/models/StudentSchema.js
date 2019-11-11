/* Import mongoose and define any variables needed to create the schema */
var mongoose = require('mongoose'), 
    Schema = mongoose.Schema;

var studentSchema = new Schema({

  idNum: { type: Number, required: true}, 
  name: { type: String, required: true},

  topSkills: [{
    topSkillOne: String,
    topSkillTwo: String,
    topSkillThree: String
  }],

  skillsToWork: [{
    workSkillOne: String, 
    workSkillTwo: String,
    workSkillThree: String
  }],

  matches:[
      {
          companyID: Number,
          companyName: String,
          companyTopSkills: String,
          jobDescription: String,
          jobRequirements: String,
          jobLink: String
      },
  ],
  
  industry: String

});

/* Create a 'pre' function that adds the updated_at (and created_at if not already there) property 
   See https://scotch.io/tutorials/using-mongoosejs-in-node-js-and-mongodb-applications
*/
studentSchema.pre('save', function(next) {
  var currentDate = new Date();

  this.updated_at = currentDate;

  if(!this.created_at)
  {
    this.created_at = currentDate;
  }
  next();

});

/* Use your schema to instantiate a Mongoose model */
//Check out - https://mongoosejs.com/docs/guide.html#models
var Student = mongoose.model('Student', studentSchema);

/* Export the model to make it avaiable to other parts of your Node application */
module.exports = Student;
