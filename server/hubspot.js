const Hubspot = require('hubspot');

// initialize hubspot
const hubspot = new Hubspot({
  apiKey: process.env.HUBSPOT_API_KEY,
  // (Optional) Specify whether to check the API limit on each call. Default: true
  checkLimit: false,
});

module.exports = hubspot;
