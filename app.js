// const express = require('express');
// const bodyParser = require('body-parser');
// const db = require('./server/db')
// const port = 3000;
// const execsRouter = require('./routes/execs');

const express = require('express');
const bodyParser = require('body-parser');
const db = require('./server/db');
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

// app.use(bodyParser.json());
// app.use(
//   bodyParser.urlencoded({
//     extended: true,
//   })
// );

// app.get('/', (req, res) => {
//   res.json({'message': 'ok'});
// })

// // app.use('/execs', execsRouter);

// app.use((err, req, res, next) => {
//   const statusCode = err.statusCode || 500;
//   console.error(err.message, err.stack);
//   res.status(statusCode).json({'message': err.message});


//   return;
// });

// team 
// app.get('/execs', (req, res) => {
//   res.json({'message': 'execs'});
// })

// app.get('/subcommittee', (req, res) => {
 
// })

// // events 
// app.get('/past-events', (req, res) => {
 
// })

// app.get('/upcoming-events', (req, res) => {
 
// })

// // sponsors
// app.get('/sponsors', (req, res) => {
 
// })

// // opportunities 
// app.get('/opportunities', (req, res) => {
 
// })

// // resources 
// app.get('/blogs', (req, res) => {
 
// })

// app.get('/blogs/blog-authors', (req, res) => {
 
// })

// app.get('/marketing-archives', (req, res) => {

// })

// app.get('/podcasts', (req, res) => {

// })

// app.get('/publications', (req, res) => {

// })

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`)
// });