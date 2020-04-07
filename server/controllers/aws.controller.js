const s3 = require('../config/s3.config.js');

exports.doUpload = (req, res, next) => {
  const { s3Client } = s3;
  const params = s3.uploadParams;

  params.Key = req.file.originalname;
  params.Body = req.file.buffer;

  s3Client.upload(params, (err, response) => {
    if (err) return next(err);
    req.awsResponse = response;
    return next();
  });
};
