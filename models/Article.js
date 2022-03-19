const mongoose = require('mongoose')

const articleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: String,
    validate: {
      validator: (v) => {
        try {
          const url = new URL(v)
          const check1 = url.hostname.endsWith(".githubusercontent.com") || url.hostname.endsWith("robigan.com") || url.hostname === "img.evbuc.com"
          const check2 = url.protocol === "https:"
          return check1 && check2
        } catch {
          return false;
        }
      },
      message: props => `${props.value} is either not a URL, not using https or doesn't originate from [*].githubusercontent.com, [*.]robigan.com or img.evbuc.com`
    },
    required: [true, "A thumbnail is required that is a URL, using https and originates from an authorized domain"]
  }
})

const Article = mongoose.model('articles', articleSchema)

module.exports = Article;