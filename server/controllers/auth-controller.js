var User = require('../models/UserSchema.js')    
const uuid = require('uuid/v4')
const auth = require('../config/firebaseadmin')
exports.create = function(req, res) {
  var id = uuid()

  // console.log(req.body)
  var payload = {
    authuid : req.body.uid,
    collectionid : id,
    accountType: req.body.accountType
  }
  var newUser = new User(payload);

  newUser.save(function(err) {
    if(err) {
      console.log(err);
      res.status(400).send(err);
    } else {
      res.status(200).json(payload.collectionid);
      console.log(newUser);
    }
  });
};

exports.delete = async function (req,res) {
    
  await auth.auth.deleteUser(req.user.authuid)
        .then(function() {
          console.log("successful deletion")
        }).catch(function(error) {
          console.log(error)
          res.status(500).send(err)
        })
  User.findOneAndRemove({collectionid: req.user.collectionid}, (err,entry) => {
    if (err) res.status(500).send(err);
    else res.status(200).send(entry)
  })
};

exports.userbyID = async function(req,res, next, id) {
  User.findOne({collectionid: id}).exec(function(err, user) {
    if (err) {
      console.log("error on user id")
      res.status(500).send(err)
    }
    else {
      req.user = user
      next()
    }
  })
}
