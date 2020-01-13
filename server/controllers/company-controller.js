var Company = require('../models/company.model.js')
var User = require('../models/UserSchema')

// Posts new company to database after survey completion
exports.create = function(req, res) {

  var newCompany = new Company(req.body);
  /* Then save company */
  newCompany.save(function(err) {
    if(err) {
      console.log(err);
      res.status(400).send(err);
    } else {
      res.status(200).json(newCompany);
    }
  });
};

exports.getall = function(req,res) {
  Company.find({}, function(err, users) {
    if (err) res.status(500).send(err)
    console.log(users)
    users.sort((x,y) => {
      return x.companyName.localeCompare(y.companyName)
    })
    res.status(200).send(users)
  })
}

// /* Show the current company */
exports.read = async function(req, res) {
  Company.findOne({id:req.user.collectionid}).exec(function(err, company) {
    if(err) {
      console.log('error on company by id')
      res.status(400).send(err);
    } else {
      res.json(company)
    }
  });
};

exports.updatePost = function(req, res) {

  const jobData = req.body

   const update = {jobPosts: jobData}


    Company.findOneAndUpdate({id:req.params.companyid}, update).exec(function(err,company) {
     if(err)
       {
         console.log('Error on updating Job Post')
         res.status(400).send(err);
       }
       else {
         res.json(company)
       }
    });
   };

exports.delete = function(req, res) {
  Company.findOneAndRemove({id: req.user.collectionid}, (err, entry) => {
    if (err) res.status(500).send(err);
    else res.status(200).send(entry);
  })
}

exports.update = function(req,res) {
  if (!req.user.collectionid) {
    return res.status(400).send({
      message: "Updated content cannot be empty"
    })
  }
  var updateduser = new Company(req.body);
  updateduser.save(function(err) {
    if (err) {
      console.log(err);
      res.status(400).send(err)
    } else {
      res.json(updateduser)
    }
  })
}


// };
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

exports.companyByID = async function(req, res, next, id) {
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

exports.updateCompany = async function(req, res) {
  Company.findOneAndUpdate({id: req.body.id}, {
    strongSkills: req.body.strongSkills,
    selectedIndustries: req.body.selectedIndustries,
    companyBio: req.body.companyBio
  }, {new: true}).exec(function(err, user) {
    if (err) {
      console.log('error on company update');
      res.status(400).send(err);
    } else {
      res.json(user);
    }
  })
}
