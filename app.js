const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const registerRoute = require('./routes/register');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/website', { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/', registerRoute);

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});