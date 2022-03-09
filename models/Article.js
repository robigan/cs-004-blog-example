const mongoose = require('mongoose')

const articleSchema = new mongoose.Schema({
  title: String,
  content: String,
  thumbnail: String
})


mongoose.model('articles', articleSchema)