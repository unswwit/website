var express = require('express');
var router = express.Router();

/* get marketing archive */
router.get('/marketingarchives', function(req, res, next) {
  res.json({ title: 'Marketing Archives' });
});

module.exports = router;
