const config = require('./config');
const helper = require('./helper');
const Pool = require('pg-pool');
const pool = new Pool(config.db);

// Get all Execs data 
const getExecs = (response) => {
  pool.query(
    `SELECT email, facebook, degree, linkedin, year, position, name, img, index, year_joined 
    FROM execs`,
    (error, results) => {
    if (error) {
      console.error('Error:', error.stack);
    }
    response.status(200).json(results.rows)
  })
}

// Get all Subcommittee data
const getSubcommittee = (response) => {
  pool.query(
    `SELECT team, degree, name, year, year_joined
    FROM subcommittee`, 
    (error, results) => {
    if (error) {
      console.error('Error:', error.stack);
    }
    response.status(200).json(results.rows)
  })
}

// Get all marketing archives data
const getMarketingArchives = (response) => {
  pool.query(
    `SELECT label, date, img, category, link, year
    FROM marketing_archives`,
    (error, results) => {
    if (error) {
      console.error('Error:', error.stack);
    }
    response.status(200).json(results.rows)
  })
}

// Get all blog authors data 
const getBlogAuthors = (response) => {
  pool.query(
    `SELECT authors, name, img
    FROM blog_authors`, 
    (error, results) => {
    if (error) {
      console.error('Error:', error.stack);
    }
    response.status(200).json(results.rows)
  })
}

// Get all blog previews data 
const getBlogPreviews = (response) => {
  pool.query(
    `SELECT date, img, heading, subheading, authors, blog_no, category
    FROM blog_previews`, 
    (error, results) => {
    if (error) {
      console.error('Error:', error.stack);
    }
    response.status(200).json(results.rows)
  })
}

// Get all opportunities data 
const getOpportunities = (response) => {
  pool.query(
    `SELECT close_date, img, type, position, location, summary, company_name, link, not_sponsor_img
    FROM opportunities`, 
    (error, results) => {
    if (error) {
      console.error('Error:', error.stack);
    }
    response.status(200).json(results.rows)
  })
}

// Get all past events data 
const getPastEvents = (response) => {
  pool.query(
    `SELECT img, year, term, event_number, facebook_link, title, description, date_time, location, resources_folder_id, youtube_video_id, image_folder, image_paths
    FROM past_events`, 
    (error, results) => {
    if (error) {
      console.error('Error:', error.stack);
    }
    response.status(200).json(results.rows)
  })
}

// Get all podcast episodes data
const getPodcastEpisodes = (response) => {
  pool.query(
    `SELECT date, title, episode_no, link, img, description, anchor, radio_republic, google, spotify, breaker
    FROM podcast_episodes`, 
    (error, results) => {
    if (error) {
      console.error('Error:', error.stack);
    }
    response.status(200).json(results.rows)
  })
}

// Get all publications data 
const getPublications = (response) => {
  pool.query(
    `SELECT date, heading, img, url, year
    FROM publications`, 
    (error, results) => {
    if (error) {
      console.error('Error:', error.stack);
    }
    response.status(200).json(results.rows)
  })
}

// Get all sponsors data 
const getSponsors = (response) => {
  pool.query(
    `SELECT name, description, website, img, type
    FROM sponsors`, 
    (error, results) => {
    if (error) {
      console.error('Error:', error.stack);
    }
    response.status(200).json(results.rows)
  })
}

// Get all upcoming events data 
const getUpcomingEvents = (response) => {
  pool.query(
    `SELECT img, title, date, description, start, finish, duration, register_link, facebook_link, location
    FROM upcoming_events`, 
    (error, results) => {
    if (error) {
      console.error('Error:', error.stack);
    }
    response.status(200).json(results.rows)
  })
}

// Get all videos data 
const getVideos = (response) => {
  pool.query(
    `SELECT name, date, youtube_video_id, video_number, img
    FROM videos`, 
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
  getSponsors,
  getUpcomingEvents,
  getVideos
}