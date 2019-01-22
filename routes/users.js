var express = require('express');
var router = express.Router();
var User = require('../models').User;
const uuidv4 = require('uuid/v4');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', function(req, res, next) {
  User.findOne({
    where: {spotify_id: req.body.spotify_id}
  }).then((result) => {
    if (result) {
      result.update({
        name: req.body.name,
        email: req.body.email
      });
      console.log("User updated !");
    } else {
      User.create({
        id: uuidv4(),
        spotify_id: req.body.spotify_id,
        name: req.body.name,
        email: req.body.email
      }).catch((error) => {
        console.error(error);
      });
      console.log("User created !");
    }
    res.status(200).send({success: true});
  }).catch((error) => {
    res.status(500).send();
    console.error(error);
  })
})

module.exports = router;
