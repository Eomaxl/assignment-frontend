//Get dependencies

const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');


//Get API Routes
const api = require('./src/Router/user');
const app = express();

// Parser for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Set our api routes
app.use('/api', api);


// Catch all other routes and return the index file
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/src/index.html'));
  });


  const port = process.env.PORT || '3000';
  app.set('port', port);


  const server = http.createServer(app);

  server.listen(port, () => console.log(`API running on localhost:${port}`));

