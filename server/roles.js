const AccessControl = require('accesscontrol');

const ac = new AccessControl();

exports.roles = (function roles() {
  ac.grant('founder')
    .readOwn('profile')
    .updateOwn('profile');

  ac.grant('reviewer')
    .extend('founder')
    .readAny('profile');

  ac.grant('evaluator')
    .extend('reviewer');

  ac.grant('admin')
    .extend('founder')
    .extend('reviewer')
    .extend('evaluator')
    .updateAny('profile')
    .deleteAny('profile');

  return ac;
}());
