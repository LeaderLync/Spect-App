/* Import mongoose and define any variables needed to create the schema */
var mongoose = require('mongoose'), 
    Schema = mongoose.Schema;

var AuthSchema = new Schema({

  authuid: {type: String, required: true},
  collectionid: {type: String, required: true}

});

/* Create a 'pre' function that adds the updated_at (and created_at if not already there) property 
   See https://scotch.io/tutorials/using-mongoosejs-in-node-js-and-mongodb-applications
*/
AuthSchema.pre('save', function(next) {
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
var Auth = mongoose.model('Auth', AuthSchema);

/* Export the model to make it avaiable to other parts of your Node application */
module.exports = Auth;