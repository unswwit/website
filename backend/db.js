const config = require('./config');
const helper = require('./helper');
const Pool = require('pg-pool');
const pool = new Pool(config.db);

// Get all Execs data 
const getExecs = (request, response) => {
  pool.query(
    `SELECT * FROM execs`, 
    (error, results) => {
    if (error) {
      console.error('Error:', error.stack);
    }
    response.status(200).json(results.rows)
  })
}

// Get all Subcommittee data
const getSubcommittee = (request, response) => {
  pool.query(
    `SELECT * FROM subcommittee`, 
    (error, results) => {
    if (error) {
      console.error('Error:', error.stack);
    }
    response.status(200).json(results.rows)
  })
}

// Get all marketing archives data
const getMarketingArchives = (request, response) => {
  pool.query(
    `SELECT * FROM marketing_archives`, 
    (error, results) => {
    if (error) {
      console.error('Error:', error.stack);
    }
    response.status(200).json(results.rows)
  })
}

// Get all blog authors data 
const getBlogAuthors = (request, response) => {
  pool.query(
    `SELECT * FROM blog_authors`, 
    (error, results) => {
    if (error) {
      console.error('Error:', error.stack);
    }
    response.status(200).json(results.rows)
  })
}

// Get all blog previews data 
const getBlogPreviews = (request, response) => {
  pool.query(
    `SELECT * FROM blog_previews`, 
    (error, results) => {
    if (error) {
      console.error('Error:', error.stack);
    }
    response.status(200).json(results.rows)
  })
}

// Get all opportunities data 
const getOpportunities = (request, response) => {
  pool.query(
    `SELECT * FROM opportunities`, 
    (error, results) => {
    if (error) {
      console.error('Error:', error.stack);
    }
    response.status(200).json(results.rows)
  })
}

// Get all past events data 
const getPastEvents = (request, response) => {
  pool.query(
    `SELECT * FROM past_events`, 
    (error, results) => {
    if (error) {
      console.error('Error:', error.stack);
    }
    response.status(200).json(results.rows)
  })
}

// Get all podcast episodes data
const getPodcastEpisodes = (request, response) => {
  pool.query(
    `SELECT * FROM podcast_episodes`, 
    (error, results) => {
    if (error) {
      console.error('Error:', error.stack);
    }
    response.status(200).json(results.rows)
  })
}

// Get all publications data 
const getPublications = (request, response) => {
  pool.query(
    `SELECT * FROM publications`, 
    (error, results) => {
    if (error) {
      console.error('Error:', error.stack);
    }
    response.status(200).json(results.rows)
  })
}

// Get all upcoming events data 
const getUpcomingEvents = (request, response) => {
  pool.query(
    `SELECT * FROM upcoming_events`, 
    (error, results) => {
    if (error) {
      console.error('Error:', error.stack);
    }
    response.status(200).json(results.rows)
  })
}

// Get all videos data 
const getVideos = (request, response) => {
  pool.query(
    `SELECT * FROM videos`, 
    (error, results) => {
    if (error) {
      console.error('Error:', error.stack);
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
  getUpcomingEvents,
  getVideos
}