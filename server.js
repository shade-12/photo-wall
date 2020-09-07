const express = require('express');
const app = express();
const port = 8080;
require('dotenv').config();

// AWS S3 service
const AWS = require('aws-sdk');
const s3 = AWS.S3();
const multerS3 = require('multer-s3');
const multer = require('multer');


/**
 * Upload a photo where max size is 5MB to S3 bucket
 */
const _uploadPhoto = multer({
  storage: multerS3({
      s3: s3,
      bucket: process.env.S3_BUCKET_NAME,
      acl: 'public-read',
      metadata: (req, file, cb) => {
        cb(null, { fieldName: file.fieldname });
      },
      key: (req, file, cb) => {
          cb(null, new Date().toISOString() + '-' + file.originalname);
      }
  }),
  limits: {
    fileSize: 1024 * 1024 * 5
  }
}).single('photo');


app.get('/', (req, res) => {
  res.send('<h1>My Express Server :|</h1>');
});

app.listen(port, () => {
  console.log(`Listening on PORT ${port}`);
});