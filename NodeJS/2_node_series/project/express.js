const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const blogRoutes = require('./routes/blogRoutes')
require("dotenv").config();

// express app
const app = express()

// conect to mongodb
const dbURI = `mongodb+srv://${process.env.MONGODB}.mongodb.net/node-tuts?retryWrites=true&w=majority&appName=Cluster0`
mongoose.connect(dbURI)
  .then((result) => {
    console.log('connect to db')
    app.listen(3000) // listen for requests
  })
  .catch((err) => console.log(err))

// register view engine
app.set('view engine', 'ejs')

//middleware & static files
app.use(express.static('public')) // make folder 'public/' public in the browser
app.use(express.urlencoded({ extended: true }))// to accept form data from 'create blogs' page))
app.use(morgan('dev'))

//routes
app.get('/', (req, res) => {
  res.redirect('/blogs')
})

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' })
})

//redirect
app.get('/aboutme', (req, res) => {
  res.redirect('/about')
})

//blog routes
app.use('/blogs', blogRoutes) //routes are declared in blogRoutes.js file

// 404 page is fired if none of the code before is ran
app.use((req, res) => {
  res.status(404).render('404', { title: '404' })
})