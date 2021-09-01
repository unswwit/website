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

app.get('/execs', db.getExecs);
app.get('/subcommittee', db.getSubcommittee);
app.get('/marketingarchives', db.getMarketingArchives); 

app.listen(port, () => {
  console.log(`The server is running at http://localhost:${port}`)
});
