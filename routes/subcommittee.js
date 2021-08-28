var express = require('express');
var router = express.Router();

/* get marketing archive */
router.get('/subcommittee', function(req, res, next) {
  res.json({ title: 'Subcommittee'});
});

module.exports = router;
