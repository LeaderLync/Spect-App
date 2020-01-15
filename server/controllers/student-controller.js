
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
  const r_user = req.body;
  console.log(r_user);

  await Company.find({}, function (err, users) {
    if (err) res.status(500).send(err)
    var jobs = [];
    users.forEach(company => {
      //console.log(company.jobPosts);
      company.jobPosts.forEach(job => {
        var score = ((1.5*r_user.skills[job.jobSkills.first]) + (1.25*r_user.skills[job.jobSkills.second]) + (1*r_user.skills[job.jobSkills.third]))/18.75;
        score = Math.round(score*1000)/10; // one decimal
        var jobPackage = {
          jobTitle: job.jobTitle,
          jobDescription: job.jobDescription,
          jobRequirements: job.jobRequirements,
          jobLink: job.jobLink,
          companyName: company.companyName,
          companyId: company.id,
          avatarUrl: company.avatarUrl,
          percentMatch: score
        };
        jobs.push(jobPackage);
      })
    });
  
    var sorted = jobs.sort((x, y) => {
      return (y.percentMatch - x.percentMatch);
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
exports.delete = function(req, res) {
  Student.findOneAndRemove({id: req.body.collectionid}, (err, entry) => {
    if (err) res.status(500).send(err);
    else res.status(200).send(entry);
  })
  /* Add your code to remove the listins */

};

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
      console.log(user)
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

exports.updateStudent = async function(req, res) {
  Student.findOneAndUpdate({id: req.body.id}, {skills: req.body.skills, selectedIndustries: req.body.selectedIndustries}, {new: true}).exec(function(err, user) {
    if (err) {
      console.log('error on student update');
      res.status(400).send(err);
    } else {
      res.json(user);
    }
  })
}
