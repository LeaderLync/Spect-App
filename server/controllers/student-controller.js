
/* Dependencies */
var Student = require('../models/student.model.js')    
exports.create = function(req, res) {

  var newStudent = new Student(req.body);
  /* Then save the listing */
  newStudent.save(function(err) {
    if(err) {
      console.log(err);
      res.status(400).send(err);
    } else {
      res.json(newStudent);
      console.log(newStudent)
    }
  });
};

// /* Show the current listing */
// exports.read = function(req, res) {
//   /* send back the listing as json from the request */
//   res.json(req.listing);
// };

// /* Update a listing - note the order in which this function is called by the router*/
// exports.update = function(req, res) {
  
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
//   Student.findOneAndRemove({id: listing.id}, (err, entry) => {
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