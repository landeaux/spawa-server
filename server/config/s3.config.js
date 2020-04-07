const env = {
  AWS_ACCESS_KEY: process.env.AWS_ACCESS_KEY,
  AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,
  REGION: process.env.AWS_REGION,
  Bucket: process.env.AWS_BUCKET,
};

module.exports = env;
