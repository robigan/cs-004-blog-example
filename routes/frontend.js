const express = require('express')
const res = require('express/lib/response')
const mongoose = require('mongoose')
const Article = mongoose.model('articles')

const router = express.Router()

router.get('/', async (req,res) => {
  // render the list of articles
  const articles = await Article.find().lean()
  console.log(articles)
  res.render('homepage', {
    articles:articles
  })
})



router.get('/articles/:id', () => {
  
})

module.exports = router;