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
         console.log('Erron on updating Job Post')
         res.status(400).send(err);
       }
       else {
         res.json(company)
       }
    });
   };

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
