var express = require('express');
var router = express.Router();

/* GET execs */
router.get('/execs', function(req, res, next) {
  res.json({ title: 'Execs' });
});

module.exports = router;
