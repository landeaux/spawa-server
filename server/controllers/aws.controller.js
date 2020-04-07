const uuid = require('uuid');
const s3 = require('../config/s3.config.js');

exports.doUpload = (req, res, next) => {
  const { s3Client } = s3;
  const params = s3.uploadParams;

  const fileName = req.file.originalname;
  const fileNameNoExt = fileName.substr(0, fileName.lastIndexOf('.'));
  const ext = fileName.substr(fileName.lastIndexOf('.') + 1);
  params.Key = `${fileNameNoExt}_${uuid.v4()}.${ext}`;
  params.Body = req.file.buffer;

  s3Client.upload(params, (err, response) => {
    if (err) return next(err);
    req.awsResponse = response;
    return next();
  });
};
