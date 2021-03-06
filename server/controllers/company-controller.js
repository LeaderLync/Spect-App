var Company = require('../models/company.model.js')
var User = require('../models/UserSchema')

exports.create = function(req, res) {

  var newCompany = new Company(req.body);
  /* Then save company */
  newCompany.save(function(err) {
    if(err) {
      console.log(err);
      res.status(400).send(err);
    } else {
      res.status(200).json(newCompany);
      //console.log(newCompany)
    }
  });
};

// /* Show the current listing */
exports.read = async function(req, res) {
  Company.findOne({id:req.user.collectionid}).exec(function(err, company) {
    if(err) {
      console.log('error on company by id')
      res.status(400).send(err);
    } else {
      console.log('worked for listing by company')
      res.json(company)
    }
  });
};

exports.updatePost = function(req, res) {
  
  console.log("Controller Body" , req.body)
  
  const jobData = req.body
  

   console.log("Posting Controller Function: ", jobData)
   const update = {jobPosts: jobData}

   console.log("User Collection ID", req.params.companyid)


    Company.findOneAndUpdate({id:req.params.companyid}, update).exec(function(err,company) {
     if(err)
       {
         console.log('Erron on updating Job Post')
         res.status(400).send(err);
       }
       else {
         console.log('Job Post Was Updated')
         res.json(company)
       }
    });
   };
// // /* Update a listing - note the order in which this function is called by the router*/
// exports.update = function(req, res) {
//   if (!req.body.updatedStudent) {
//     return res.status(400).send({
//       message: "Updated content cannot be empty"
//     })
//   }
//   List
//   var updatedStudent = new Listing(req.body);
//   if(req.results) {
//     updatelisting.coordinates = {
//       latitude: req.results.lat,
//       longitude: req.results.lng
//     };
//   }
//   updatelisting.save(function(err) {
//     if(err) {
//       console.log(err);
//       res.status(400).send(err);
//     } else {
//       res.json(updatelisting);
//       console.log(updatelisting)
//     }
//   });
// };

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
exports.companyByID = async function(req, res, next, id) {
  User.findOne({authuid: id}).exec(function(err, user) {
    if (err) {
      console.log('error on student by id')
      res.status(400).send(err);
    }else {
      console.log(user)
       req.user = user
       next()
    }
  })

};
