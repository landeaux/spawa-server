var jwt = require('express-jwt');
var secret = require('../config').secret;

// helper function to extract the JWT from the Authorization header
function getTokenFromHeader (req) {
  if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Token') {
    return req.headers.authorization.split(' ')[1];
  }

  return null;
}

// define middleware options for required and optional authentication routes
var auth = {
  required: jwt({
    secret: secret,
    userProperty: 'payload', // JWT payloads will be attached to each request
    getToken: getTokenFromHeader
  }),
  optional: jwt({
    secret: secret,
    userProperty: 'payload', // JWT payloads will be attached to each request
    credentialsRequired: false, // specifies optional authentication
    getToken: getTokenFromHeader
  })
};

// export middlewares
module.exports = auth;