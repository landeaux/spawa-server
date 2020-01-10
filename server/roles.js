const AccessControl = require('accesscontrol');

const ac = new AccessControl();

exports.roles = (function roles() {
  ac.grant('founder')
    .readOwn('user')
    .updateOwn('user');

  ac.grant('reviewer')
    .extend('founder')
    .readAny('user');

  ac.grant('evaluator')
    .extend('reviewer');

  ac.grant('admin')
    .extend('founder')
    .extend('reviewer')
    .extend('evaluator')
    .createAny('user')
    .updateAny('user')
    .deleteAny('user');

  return ac;
}());
