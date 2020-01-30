const AccessControl = require('accesscontrol');

const ac = new AccessControl();

exports.roles = (function roles() {
  ac.grant('founder')
    .readOwn('user')
    .updateOwn('user')
    .readOwn('profile');

  ac.grant('reviewer')
    .extend('founder')
    .readAny('profile');

  ac.grant('evaluator')
    .extend('reviewer');

  ac.grant('admin')
    .extend([
      'founder',
      'reviewer',
      'evaluator',
    ])
    .createAny('user')
    .readAny('user')
    .updateAny('user')
    .deleteAny('user');

  return ac;
}());
