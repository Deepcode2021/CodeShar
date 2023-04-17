// api/index.js
const express = require('express');
const fileUpload = require('express-fileupload');
const uploadHandler = require('./upload');

const app = express();

app.use(fileUpload());

app.post('/upload', uploadHandler);

module.exports = app;
