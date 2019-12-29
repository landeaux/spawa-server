const jwt = require('express-jwt');
const { secret } = require('../config');

// helper function to extract the JWT from the Authorization header
function getTokenFromHeader(req) {
  if (req.headers.authorization
    && (req.headers.authorization.split(' ')[0] === 'Token'
    || req.headers.authorization.split(' ')[0] === 'Bearer')) {
    return req.headers.authorization.split(' ')[1];
  }

  return null;
}

// define middleware options for required and optional authentication routes
const auth = {
  required: jwt({
    secret,
    userProperty: 'payload', // JWT payloads will be attached to each request
    getToken: getTokenFromHeader,
  }),
  optional: jwt({
    secret,
    userProperty: 'payload', // JWT payloads will be attached to each request
    credentialsRequired: false, // specifies optional authentication
    getToken: getTokenFromHeader,
  }),
};

// export middleware
module.exports = auth;
