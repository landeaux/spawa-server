const AccessControl = require('accesscontrol');

const ac = new AccessControl();

exports.roles = (function roles() {
  ac.grant('founder')
    .readOwn('user')
    .updateOwn('user')
    .readOwn('profile')
    .createOwn('pitchdeck')
    .readOwn('pitchdeck')
    .updateOwn('pitchdeck');

  ac.grant('reviewer')
    .readOwn('user')
    .updateOwn('user')
    .readAny('profile')
    .createOwn('review')
    .readOwn('review')
    .updateOwn('review')
    .deleteOwn('review')
    .readAny('pitchdeck');

  ac.grant('evaluator')
    .extend('reviewer');

  ac.grant('admin')
    .extend([
      'reviewer',
      'evaluator',
    ])
    .createAny('user')
    .readAny('user')
    .updateAny('user')
    .deleteAny('user')
    .createAny('review')
    .readAny('review')
    .updateAny('review')
    .deleteAny('review')
    .updateAny('pitchdeck')
    .deleteAny('pitchdeck');

  return ac;
}());
