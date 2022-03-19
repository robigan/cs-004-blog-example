const mongoose = require('mongoose')

const articleSchema = new mongoose.Schema({
  title: String,
  content: String,
  thumbnail: String
})

const Article = mongoose.model('articles', articleSchema)

module.exports = Article;