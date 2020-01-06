// load our environment variables for any non-production environment
if (process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line global-require
  require('dotenv').config();
}

// import dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const morgan = require('morgan');

// initialize app
const app = express();

// use middleware
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));

mongoose.connect(
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}.mongodb.net/test?retryWrites=true&w=majority`, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
);

// bring in our models
require('./models/User');
require('./models/Post');

require('./config/passport');

app.use(require('./routes'));

// Handle production
if (process.env.NODE_ENV === 'production') {
  // Static folder
  app.use(express.static(`${__dirname}/public/`));

  // Handle SPA (NOTE: This MUST be below other all other routes)
  app.get(/.*/, (req, res) => res.sendFile(`${__dirname}/public/index.html`));
}

const port = process.env.PORT || 5000;

// start the server
app.listen(port, () => console.log(`Server started on port ${port}`));
