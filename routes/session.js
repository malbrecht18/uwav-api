var express = require('express');
var router = express.Router();
var Session = require('../models').Session;

/* GET users listing. */
router.get('/:sessionId', function(req, res, next) {
  Session.findOne({
    where: {
      session_id: req.params.sessionId
    }
  }).then(session => {
    if (session == null || session.length === 0) {
      res.status(204).send();
    } else {
      res.status(200).type('json').json(session);
    }
  })
});

module.exports = router;