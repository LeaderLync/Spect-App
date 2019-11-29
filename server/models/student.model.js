var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


var studentSchema = new Schema({
    id: Number,

    name: {
      first: String,
      last: String
    },
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

    industry: [String],
    
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

    updated_at: Date
})


/* Create a 'pre' function that adds the updated_at (and created_at if not already there) property
   See https://scotch.io/tutorials/using-mongoosejs-in-node-js-and-mongodb-applications
*/
studentSchema.pre('save', function(next) {
  //if (!this.id) throw new Error("no name provided")
  if (!this.name) throw new Error("no code provided")
  var currentDate = new Date()
  this.updated_at = currentDate
  next()
  /* your code here */
});

/* Use your schema to instantiate a Mongoose model */
//Check out - https://mongoosejs.com/docs/guide.html#models
var Student = mongoose.model('Student', studentSchema);

/* Export the model to make it avaiable to other parts of your Node application */
module.exports = Student;
