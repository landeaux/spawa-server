// load our environment variables for any non-production environment
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

// import dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// initialize app
const app = express();

// use middleware
app.use(bodyParser.json());
app.use(cors());

const posts = require('./routes/api/posts');

app.use('/api/posts', posts);

// Handle production
if (process.env.NODE_ENV === 'production') {
  // Static folder
  app.use(express.static(__dirname + '/public/'));

  // Handle SPA (NOTE: This MUST be below other all other routes)
  app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
}

const port = process.env.PORT || 5000;

// start the server
app.listen(port, () => console.log(`Server started on port ${port}`));
