const config = require('./config');
const helper = require('./helper');
const Pool = require('pg-pool');
const pool = new Pool(config.db);

// Get Execs data 
const getExecs = (request, response) => {
  const offset = helper.getOffset(request.query.page, config.listPerPage);
  pool.query(
    `SELECT email, facebook, degree, linkedin, year, position, name, img, index, year_joined 
    FROM execs LIMIT $1 OFFSET $2`, 
    [config.listPerPage, offset],
    (error, results) => {
    if (error) {
      console.log(error);
    }
    response.status(200).json(results.rows)
  })
}

// Get Subcommittee data
const getSubcommittee = (request, response) => {
  const offset = helper.getOffset(request.query.page, config.listPerPage);
  pool.query(
    `SELECT team, degree, name, year, year_joined
    FROM subcommittee LIMIT $1 OFFSET $2`, 
    [config.listPerPage, offset],
    (error, results) => {
    if (error) {
      console.log(error);
    }
    response.status(200).json(results.rows)
  })
}

// Get marketing archives data
const getMarketingArchives = (request, response) => {
  const offset = helper.getOffset(request.query.page, config.listPerPage);
  pool.query(
    `SELECT label, date, img, category, link, year
    FROM marketing_archives LIMIT $1 OFFSET $2`, 
    [config.listPerPage, offset],
    (error, results) => {
    if (error) {
      console.log(error);
    }
    response.status(200).json(results.rows)
  })
}

module.exports = {
  getExecs,
  getSubcommittee,
  getMarketingArchives
}