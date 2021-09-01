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

const getBlogAuthors = (request, response) => {
  const offset = helper.getOffset(request.query.page, config.listPerPage);
  pool.query(
    `SELECT authors, name, img
    FROM blog_authors LIMIT $1 OFFSET $2`, 
    [config.listPerPage, offset],
    (error, results) => {
    if (error) {
      console.log(error);
    }
    response.status(200).json(results.rows)
  })
}

const getBlogPreviews = (request, response) => {
  const offset = helper.getOffset(request.query.page, config.listPerPage);
  pool.query(
    `SELECT date, img, heading, subheading, authors, blog_no, category
    FROM blog_previews LIMIT $1 OFFSET $2`, 
    [config.listPerPage, offset],
    (error, results) => {
    if (error) {
      console.log(error);
    }
    response.status(200).json(results.rows)
  })
}

const getOpportunities = (request, response) => {
  const offset = helper.getOffset(request.query.page, config.listPerPage);
  pool.query(
    `SELECT close_date, img, type, position, location, summary, company_name, link, not_sponsor_img
    FROM opportunities LIMIT $1 OFFSET $2`, 
    [config.listPerPage, offset],
    (error, results) => {
    if (error) {
      console.log(error);
    }
    response.status(200).json(results.rows)
  })
}

const getPastEvents = (request, response) => {
  const offset = helper.getOffset(request.query.page, config.listPerPage);
  pool.query(
    `SELECT img, year, term, event_number, facebook_link, title, description, date_time, location, resources_folder_id, youtube_video_id, youtube_link
    FROM past_events LIMIT $1 OFFSET $2`, 
    [config.listPerPage, offset],
    (error, results) => {
    if (error) {
      console.log(error);
    }
    response.status(200).json(results.rows)
  })
}

const getPodcastEpisodes = (request, response) => {
  const offset = helper.getOffset(request.query.page, config.listPerPage);
  pool.query(
    `SELECT date, title, episode_no, link, img, description, anchor, radio_republic, google, spotify, breaker
    FROM podcast_episodes LIMIT $1 OFFSET $2`, 
    [config.listPerPage, offset],
    (error, results) => {
    if (error) {
      console.log(error);
    }
    response.status(200).json(results.rows)
  })
}

const getPublications = (request, response) => {
  const offset = helper.getOffset(request.query.page, config.listPerPage);
  pool.query(
    `SELECT date, heading, img, url, year
    FROM publications LIMIT $1 OFFSET $2`, 
    [config.listPerPage, offset],
    (error, results) => {
    if (error) {
      console.log(error);
    }
    response.status(200).json(results.rows)
  })
}

const getSponsors = (request, response) => {
  const offset = helper.getOffset(request.query.page, config.listPerPage);
  pool.query(
    `SELECT name, description, website, img, type
    FROM sponsors LIMIT $1 OFFSET $2`, 
    [config.listPerPage, offset],
    (error, results) => {
    if (error) {
      console.log(error);
    }
    response.status(200).json(results.rows)
  })
}

const getUpcomingEvents = (request, response) => {
  const offset = helper.getOffset(request.query.page, config.listPerPage);
  pool.query(
    `SELECT img, title, date, description, start, finish, duration, register_link, facebook_link, location
    FROM upcoming_events LIMIT $1 OFFSET $2`, 
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
  getMarketingArchives,
  getBlogAuthors,
  getBlogPreviews,
  getOpportunities,
  getPastEvents,
  getPodcastEpisodes,
  getPublications,
  getSponsors,
  getUpcomingEvents
}