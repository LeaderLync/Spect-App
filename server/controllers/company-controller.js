var Company = require('../models/company.model.js')
const uuid = require('uuid/v4')


exports.create = function(req, res) {
  var companyID = uuid();

  var companyData = {
    uid: companyID,
    name: req.body.companyName,
    bio: req.body.companyDescription,
    industry: req.body.companyIndustry,
    jobPost: []
  }

  console.log("Create Function Logging: ", companyData);

  var newCompany = new Company(companyData);
  /* Then save the listing */
  newCompany.save(function(err) {
    if(err) {
      console.log(err);
      res.status(400).send(err);
    } else {
      res.json(newCompany);
      console.log(newCompany);
    }
  });
};


exports.jobPost = function(req, res) {


   console.log("Posting Controller Function: ", req.body)
  
   var updatedCompany = new Company(req.body);
   if(req.results) {
     updatecompany.jobPost = {
       jobID: uuid(), 
       jobTitle: req.body.jobTitle,
       jobDescription: req.body.jobDescription,
       jobRequirements: req.body.jobRequirements
     };
   }
   updatecompany.save(function(err) {
     if(err) {
       console.log(err);
       res.status(400).send(err);
     } else {
       res.json(updatecompany);
       console.log(updatecompany)
     }
   });
};

// /* Delete a listing */
// exports.delete = function(req, res) {
//   var listing = req.student;
//   Company.findOneAndRemove({id: listing.id}, (err, entry) => {
//     if (err) res.status(500).send(err);
//     else res.status(200).send(entry);
//   })
//   /* Add your code to remove the listins */

// };

// /* Retreive all the directory listings, sorted alphabetically by listing code */
// exports.list = function(req, res) {
//   Listing.find({}, function (err, users) {
//     if (err) res.status(500).send(err)
//     users.sort((x, y) => {
//       return x.name.localeCompare(y.name);
//     })
//     console.log(users.length)
//     res.status(200).send(users)
//   })
// };

// /* 
//   Middleware: find a listing by its ID, then pass it to the next request handler. 

//   HINT: Find the listing using a mongoose query, 
//         bind it to the request object as the property 'listing', 
//         then finally call next
//  */
// exports.listingByID = function(req, res, next, id) {
//   Listing.findById(id).exec(function(err, listing) {
//     if(err) {
//       console.log('error on listing by id')
//       res.status(400).send(err);
//     } else {
//       console.log('worked for listing by id')
//       req.listing = listing;
//       next();
//     }
//   });
// };