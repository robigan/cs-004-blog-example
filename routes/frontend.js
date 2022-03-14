// dependencies 
const express = require('express')
const mongoose = require('mongoose')

// Get the models
const Article = mongoose.model('articles')


// create the routes
const router = express.Router()

// create the request
//list of the articles
router.get('/', async (req,res) => {
  // render the list of articles
  const articles = await Article.find().lean()
  console.log(articles)
  res.render('homepage', {
    articles:articles
  })
})

router.post('/articles/create', async (req,res) => {
  // create  a new document on the database
  await Article.create(req.body)
  // console.log(req.body)
  res.render('new-article', {})
})

router.get('/articles/create', (req,res) => {
  res.render('new-article', {})
})


router.get('/articles/:id', () => {
  
})

// export the requests
module.exports = router;