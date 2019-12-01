
/* Dependencies */
var Student = require('../models/StudentSchema.js')    
var User = require('../models/UserSchema')
var Company = require('../models/company.model')
exports.create = function(req, res) {
  console.log(req.body)
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

exports.getmatches = function(req, res) {
  console.log(req.body)
  let the_len = req.body.request.length
  
  // Company.find({}, function (err, users) {
  //   if (err) res.status(500).send(err)
  //   users.sort((x, y) => {
  //     let absx  = 0
  //     let absy = 0
  //     for (let i = 0; i < the_len; i++) {
  //       absx += Math.abs(x[i] - request[i])
  //       absy += Math.abs(y[i] - request[i])
  //     }
  //     return absx < absy;
  //   })
  //   console.log(users.length)
  //   res.status(200).send(users)
  // })
  res.status(200).send("ayeee bruh")
}

// /* Show the current listing */
exports.read = function(req, res) {
  /* send back the listing as json from the request */
  res.json(req.student);
};

// /* Update a listing - note the order in which this function is called by the router*/
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
exports.studentByID = function(req, res, next, _id) {
  var my_user = null
  User.findOne({id: _id}).exec(function(err, user) {
    if (err) {
      console.log('error on student by id')
      res.status(400).send(err);
    }else {
      my_user = user
    }
  })
  Student.findById(my_user.collectionid).exec(function(err, student) {
    if(err) {
      console.log('error on student by id')
      res.status(400).send(err);
    } else {
      console.log('worked for listing by student')
      req.student = student;
      next();
    }
  });
};