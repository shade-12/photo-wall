const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 8080;
require('dotenv').config();

app.use(bodyParser.json({ limit: '5mb', extended: true }))
   .use(bodyParser.urlencoded({ limit: '5mb', extended: true }));

// CORS configuration
const allowedOrigins = ['http://localhost:3000'];
app.use(cors({
  origin: (origin, callback) => {
    if (!origin) 
      return callback(null, true);  // Allow requests with no origin, eg.curl requests

    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    
    return callback(null, true);
  }
}));

// AWS S3 service
const AWS = require('aws-sdk');
const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  Bucket: process.env.S3_BUCKET_NAME
});
const multerS3 = require('multer-s3');
const multer = require('multer');


/**
 * Upload a photo where max size is 5MB to S3 bucket
 */
const uploadPhoto = multer({
  storage: multerS3({
      s3: s3,
      bucket: process.env.S3_BUCKET_NAME,
      acl: 'public-read',
      key: (req, file, cb) => {
          cb(null, new Date().toISOString() + '-' + file.originalname);
      }
  }),
  limits: {
    fileSize: 1024 * 1024 * 5
  }
}).single('photo');

/**
 * Get all photos from S3 bucket
 * 
 * @return {Promise}
 */
const getPhotos = () => {
  const params = {
    Bucket: process.env.S3_BUCKET_NAME
  };
  return s3.listObjects(params).promise();
};


app.post('/photos/upload', (req, res) => {
  uploadPhoto(req, res, (err) => {
    if (err) {
      console.log(`awsService::uploadPhoto::error - ${JSON.stringify(err)}`);
      res.status(422).send(`Service error: path="/upload" method="POST".`);
    } else {
      if (req.file === undefined)
        res.status(422).send(`User error: No File Selected.`);
      else {
        console.log(`awsService::uploadPhoto::success - ${JSON.stringify(req.file.location)}`)
        res.status(200).send(req.file.location);
      }
    }
  });
});

app.get('/photos', (req, res) => {
  getPhotos()
  .then(data => {
    console.log(`awsService::getPhotos::success - ${JSON.stringify(data.Contents, null, 2)}`);
    res.status(200).send(data.Contents);
  })
  .catch(err => {
    console.log(`awsService::getPhotos::error - ${JSON.stringify(err)}`);
    res.status(422).send(`Service error: path="/photos" method="GET".`)
  });
});

app.get('/', (req, res) => {
  res.send('<h1>My Express Server :|</h1>');
});

app.listen(port, () => {
  console.log(`Listening on PORT ${port}`);
});