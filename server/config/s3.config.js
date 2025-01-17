const AWS = require('aws-sdk');
const env = require('./s3.env.js');

const s3Client = new AWS.S3({
  accessKeyId: env.AWS_ACCESS_KEY,
  secretAccessKey: env.AWS_SECRET_ACCESS_KEY,
  region: env.REGION,
});

const uploadParams = {
  Bucket: env.Bucket,
  Key: '',
  Body: null,
};

const downloadParams = {
  Bucket: env.Bucket,
  Key: '',
};

const s3 = {};
s3.s3Client = s3Client;
s3.uploadParams = uploadParams;
s3.downloadParams = downloadParams;

module.exports = s3;
