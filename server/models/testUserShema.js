/* Import mongoose and define any variables needed to create the schema */
var mongoose = require('mongoose'), 
    Schema = mongoose.Schema;

var TestUserSchema = new Schema({

  authuid: {type: String, required: true},
  collectionid: {type: String, required: true} //0 for student 1 for company

});

/* Create a 'pre' function that adds the updated_at (and created_at if not already there) property 
   See https://scotch.io/tutorials/using-mongoosejs-in-node-js-and-mongodb-applications
*/
TestUserSchema.pre('save', function(next) {
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
var TestUser = mongoose.model('TestUser', TestUserSchema);

/* Export the model to make it avaiable to other parts of your Node application */
module.exports = TestUser; 