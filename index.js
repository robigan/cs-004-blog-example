// Load secret mongodb pass
require('dotenv').config()

// Dependencies
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser');

(async () => {
  // create the app
  const app = express()

  // enable POST request
  app.use(bodyParser.urlencoded({
    extended: true
  }));

  // Install ejs - to show JS variables into the HTML
  app.set('view engine', 'ejs')

  // Connect to mongoDb
  await mongoose.connect(process.env.MONGODB_URL)

  // Connect the routes
  app.use(require('./routes/frontend'))

  // Listen on port 3000
  app.listen(3000)
})();