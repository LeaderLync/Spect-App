var User = require('../models/UserSchema.js')    
const uuid = require('uuid/v4')

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

// /* Delete a listing */
// exports.delete = function(req, res) {
//   var listing = req.auth;
//   Student.findOneAndRemove({id: listing.id}, (err, entry) => {
//     if (err) res.status(500).send(err);
//     else res.status(200).send(entry);
//   })
  /* Add your code to remove the listins */

// };
