// dependencies 
const express = require('express')
const Article = require('../models/Article');

// create the routes
const router = express.Router()

// create the request
//list of the articles
router.get('/', async (req, res) => {
  // render the list of articles
  const articles = await Article.find({}).lean(true)
  // console.log(articles)
  res.render('homepage', {
    articles: articles
  })
})

router.post('/articles/create', async (req, res) => {
  // create  a new document on the database
  // await Article.create(req.body)
  const body = req.body;
  const article = new Article(body)
  await article.save()
  // console.log(req.body)
  res.json(article.toObject());
})

router.get('/articles/create', async (req, res) => {
  res.render('new-article')
})

router.get('/articles/:id', async (req, res) => {
  const article = await Article.findById(req.params.id).lean(true)
  // console.log(article)
  
  if (article) res.render('article', {
    article: article
  })
  else res.sendStatus(404)
})

// export the requests
module.exports = router;