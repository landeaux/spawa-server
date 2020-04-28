const uuid = require('uuid');
const s3 = require('../config/s3.config.js');

exports.doUpload = async (req, res, next) => {
  try {
    const { s3Client } = s3;
    const params = s3.uploadParams;

    const fileName = req.file.originalname;
    const fileNameNoExt = fileName.substr(0, fileName.lastIndexOf('.'));
    const ext = fileName.substr(fileName.lastIndexOf('.') + 1);

    const { s3Key } = req.pitchDeckDoc.getActiveVersion();
    const S3KeyAlreadyExists = Boolean(s3Key);
    params.Key = S3KeyAlreadyExists
      ? req.pitchDeckDoc.getActiveVersion().s3Key
      : `${fileNameNoExt}_${uuid.v4()}.${ext}`;
    params.Body = req.file.buffer;
    params.ContentType = req.file.mimetype;

    req.s3Upload = s3Client.upload(params);
    next();
  } catch (error) {
    next(error);
  }
};

exports.doDownload = (req, res) => {
  const { s3Client } = s3;
  const params = s3.downloadParams;

  params.Key = req.params.key;
  const { filename } = req.params;

  s3Client.getObject(params)
    .on('httpHeaders', (statusCode, httpHeaders) => {
      if (statusCode === 200) {
        res.set({
          'Content-Type': httpHeaders['content-type'],
          'Content-Disposition': `attachment; filename*=utf-8''${encodeURI(filename)}`,
        });
      }
    })
    .createReadStream()
    .on('error', (err) => {
      res.status(500).json({ error: `Error -> ${err}` });
    })
    .pipe(res);
};
