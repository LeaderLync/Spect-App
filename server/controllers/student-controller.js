
/* Dependencies */
var Student = require('../models/student.model.js')
var User = require('../models/UserSchema')
var Company = require('../models/company.model')

// saves new student to database after completion of survey
exports.create = function(req, res) {
  var newStudent = new Student(req.body);
  /* Then save the student */
  newStudent.save(function(err) {
    if(err) {
      console.log(err);
      res.status(400).send(err);
    } else {
      res.status(200).json(newStudent);
    }
  });
};

exports.getmatches = async function(req, res) {
  const r_user = req.body


  await Company.find({}, function (err, users) {
    if (err) res.status(500).send(err)
    var sorted = users.sort((x, y) => {
      var absx  = 0
      var absy = 0
      absx += Math.abs(x.question1 - r_user.question1)
      absx += Math.abs(x.question2 - r_user.question2)
      absx += Math.abs(x.question3 - r_user.question3)
      absx += Math.abs(x.question4 - r_user.question4)
      absx += Math.abs(x.question5 - r_user.question5)
      absx += Math.abs(x.question6 - r_user.question6)
      absx += Math.abs(x.question1 - r_user.question1)
      absx += Math.abs(x.question2 - r_user.question2)
      absx += Math.abs(x.question3 - r_user.question3)
      absx += Math.abs(x.question4 - r_user.question4)
      absx += Math.abs(x.question5 - r_user.question5)
      absx += Math.abs(x.question6 - r_user.question6)
      absx += Math.abs(x.question7 - r_user.question7)
      absx += Math.abs(x.question8 - r_user.question8)
      absx += Math.abs(x.question9 - r_user.question9)
      absx += Math.abs(x.question10 - r_user.question10)
      absx += Math.abs(x.question11 - r_user.question11)
      absx += Math.abs(x.question12 - r_user.question12)
      absx += Math.abs(x.question13 - r_user.question13)
      absx += Math.abs(x.question14 - r_user.question14)
      absx += Math.abs(x.question15 - r_user.question15)
      absx += Math.abs(x.question16 - r_user.question16)
      absx += Math.abs(x.question17 - r_user.question17)
      absx += Math.abs(x.question18 - r_user.question18)

      absy += Math.abs(y.question1 - r_user.question1)
      absy += Math.abs(y.question2 - r_user.question2)
      absy += Math.abs(y.question3 - r_user.question3)
      absy += Math.abs(y.question4 - r_user.question4)
      absy += Math.abs(y.question5 - r_user.question5)
      absy += Math.abs(y.question6 - r_user.question6)
      absy += Math.abs(y.question7 - r_user.question7)
      absy += Math.abs(y.question8 - r_user.question8)
      absy += Math.abs(y.question9 - r_user.question9)
      absy += Math.abs(y.question10 - r_user.question10)
      absy += Math.abs(y.question11 - r_user.question11)
      absy += Math.abs(y.question12 - r_user.question12)
      absy += Math.abs(y.question13 - r_user.question13)
      absy += Math.abs(y.question14 - r_user.question14)
      absy += Math.abs(y.question15 - r_user.question15)
      absy += Math.abs(y.question16 - r_user.question16)
      absy += Math.abs(y.question17 - r_user.question17)
      absy += Math.abs(y.question18 - r_user.question18)
      if (absx < absy) return -1
      else if (absx > absy) return 1
      else return 0
    })
    res.status(200).send(sorted)
  })
}

// /* Show the current listing */
exports.read = async function(req, res) {
  Student.findOne({id:req.user.collectionid}).exec(function(err, student) {
    if(err) {
      console.log('error on student by id')
      res.status(400).send(err);
    } else {
      res.json(student)
    }
  });
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

exports.getall = function(req,res) {
  Student.find({}, function(err, users) {
    if (err) res.status(500).send(err)
    users.sort((x,y) => {
      return x.firstName.localeCompare(y.firstName);
    })
    res.status(200).send(users)
  })
}
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

exports.studentByID = async function(req, res, next, id) {
  User.findOne({authuid: id}).exec(function(err, user) {
    if (err) {
      console.log('error on student by id')
      res.status(400).send(err);
    }else {
      req.user = user
      next()
    }
  })
};

exports.addMatch = async function(req, res){
  Student.findOneAndUpdate({id: req.body.userId}, {matches: req.body.newArray}).exec(function(err, user) {
    if (err) {
      console.log('error on student by id')
      res.status(400).send(err);
    }else {
      var myuser = user
      myuser['matches'] = req.body.newArray
      res.status(200).send(myuser);
    }
  })
}
