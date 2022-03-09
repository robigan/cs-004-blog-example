const express = require('express')
const mongoose = require('mongoose')

const app =  express()
const mongoDbURI = 'mongodb+srv://test:test@cluster0.1vosb.mongodb.net/blogdatabase?retryWrites=true&w=majority'

mongoose.connect(mongoDbURI)

require('./models/Article')
app.use(require('./routes/frontend'))
app.set('view engine','ejs')


const frontendRoutes = require('./routes/frontend')


app.listen(3000)