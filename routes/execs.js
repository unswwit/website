const express = require('express');
const router = express.Router();
const execs = require('../services/execs');

/* GET programming languages. */
router.get('/', async function(req, res, next) {
  try {
    res.json(await execs.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting execs `, err.message);
    next(err);
  }
});

module.exports = router;