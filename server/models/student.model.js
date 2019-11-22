var mongoose = require('mongoose'),
	Schema = mongoose.Schema;


var StudentSchema = new Schema({
	idNum: { type: Number, required: true},
	name: { type: String, required: true},
	topSkills: [],
	skillsToWork: [],
	responseValues: [],
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
	industry: []
})


/* Create a 'pre' function that adds the updated_at (and created_at if not already there) property 
	 See https://scotch.io/tutorials/using-mongoosejs-in-node-js-and-mongodb-applications
	 */
StudentSchema.pre('save', function(next) {
	if (!this.id) throw new Error("no name provided")
	if (!this.name) throw new Error("no code provided")
	var currentDate = new Date()
	this.updated_at = currentDate
	next()
	/* your code here */
});

/* Use your schema to instantiate a Mongoose model */
//Check out - https://mongoosejs.com/docs/guide.html#models
var Student = mongoose.model('Student', StudentSchema);

/* Export the model to make it avaiable to other parts of your Node application */
module.exports = Student;
