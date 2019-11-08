/* Import mongoose and define any variables needed to create the schema */
var mongoose = require('mongoose'), 
    Schema = mongoose.Schema;

/* Create your schema */
var listingSchema = new Schema({
  industry: String,
  uid: String,
  URLtoLogo: String, // if time permits
  name: String,
  Bio: String,
  skills: {
      skill1: String, 
      skill2: String, 
      skill3: String
    },
    created_at: Date,
    updated_at: Date,
});
/* create a 'pre' function that adds the updated_at and created_at if not already there property */
listingSchema.pre('save', function(next) {
    var currentDate = new Date();
    this.updated_at = currentDate;
    // if it doesn't exist, add created_at date
    if(!this.created_at)
      this.created_at = currentDate;
    next();
  });

var Listing = mongoose.model('Listing', listingSchema);

/* Export the model to make it available to other parts of your Node application */
module.exports = Listing;
