// Load secret mongodb pass
require('dotenv').config()

// Require the libs
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser');

(async () => {
  // Create the app
  const app = express()

  // Enable POST request
  app.use(bodyParser.urlencoded({
    extended: true
  }));

  // Configure the view engine to use ejs
  app.set('view engine', 'ejs')

  // Connect to mongoDb
  await mongoose.connect(process.env.MONGODB_URL)

  // Import and load the routes/router into the express framework
  app.use(require('./routes/frontend'))

  // Listen on port 3000
  app.listen(3000)
})();