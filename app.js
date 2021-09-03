const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
const port = process.env.PORT || '3000';

const app = express();
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
});

// Get data from database 
app.get('/execs', db.getExecs);
app.get('/subcommittee', db.getSubcommittee);
app.get('/marketing-archives', db.getMarketingArchives); 
app.get('/blog-authors', db.getBlogAuthors);
app.get('/blog-previews', db.getBlogPreviews);
app.get('/opportunities', db.getOpportunities);
app.get('/past-events', db.getPastEvents);
app.get('/podcast-episodes', db.getPodcastEpisodes);
app.get('/publications', db.getPublications);
app.get('/sponsors', db.getSponsors);
app.get('/upcoming-events', db.getUpcomingEvents);

app.listen(port, () => {
  console.log(`The server is running at http://localhost:${port}`)
});
