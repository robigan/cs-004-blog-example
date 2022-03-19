// dependencies 
const express = require('express')
const Article = require('../models/Article');

// Create the router
const router = express.Router()

// On the homepage query all of the database and return it using the homepage.ejs view
router.get('/', async (req, res) => {
  // Get the list of articles and limit it to 25
  const articles = await Article.find({}).limit(25).lean(true)

  // Render homepage passing homepage
  res.render('homepage', {
    articles: articles
  })
})

// When receiving a POST request, process it by creating a new Article document and then saving it
router.post('/articles/create', async (req, res) => {
  // Create the new Article and save it
  const body = req.body;
  const article = new Article(body)
  await article.save()

  // Then send as the response object the article's data itself
  res.json(article.toObject());
})

// Render the new-article.ejs file when a GET request is met
router.get('/articles/create', async (req, res) => {
  res.render('new-article')
})

// When the browser fetches a article by id, use the mongoose findById method and render article.ejs and pass the article props
router.get('/articles/:id', async (req, res) => {
  // Fetch the article
  const article = await Article.findById(req.params.id).lean(true)
  
  // If the article !== null then render the article, otherwise return 404 not found
  if (article !== null) res.render('article', {
    article: article
  })
  else res.sendStatus(404)
})

// Export the router
module.exports = router;