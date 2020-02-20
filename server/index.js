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

// connect to mongodb database using mongoose
console.log('Attempting MongoDB connection...');
mongoose.connect(
  process.env.MONGODB_URI,
  {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
).then(
  // success callback
  () => { console.log('MongoDB connection successful!'); },
  // failure callback
  (err) => { console.error(err); },
);

// bring in our models
require('./models/User');
require('./models/PitchDeck');
require('./models/Review');

require('./config/passport');

app.use(require('./routes'));

// Handle production/staging
if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging') {
  // Static folder
  app.use(express.static(`${__dirname}/public/`));

  // Handle SPA (NOTE: This MUST be below other all other routes)
  app.get(/.*/, (req, res) => res.sendFile(`${__dirname}/public/index.html`));
}

const port = process.env.PORT || 5000;

// start the server
app.listen(port, () => console.log(`Server started on port ${port}`));
