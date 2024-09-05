const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const Blog = require('./models/blog')
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
// app.set('views', 'myviews')

//middleware & static files
app.use(express.static('public')) // make folder 'public/' public in the browser
app.use(morgan('dev'))
// app.use(morgan('tiny')) // change formating

// mongoose and mongo sandbox routes
app.get('/add-blog', (req, res) => {
  const blog = new Blog({
    title: 'new blog',
    snippet: 'about my new blog',
    body: 'more about my new blog'
  })

  blog.save()
    .then((result) => {
      res.send(result)
    })
    .catch((err) => {
      console.log(err)
    })
})

app.get('/all-blogs', (req, res) => {
  Blog.find()
    .then((result) => {
      res.send(result)
    })
    .catch((err) => {
      console.log(err)
    })
})

app.get('/single-blog', (req, res) => {
  Blog.findById('66b9940f5e25149b8edfecf0')
    .then((result) => {
      res.send(result)
    })
    .catch((err) => {
      console.log(err)
    })
})

app.use((req, res, next) => {
  console.log('new request made')
  console.log('host: ', req.hostname)
  console.log('path: ', req.path)
  console.log('method: ', req.method)
  next();
})

app.use((req, res, next) => {
  console.log('in the next middleware')
  next();
})

app.get('/', (req, res) => {
  const blogs = [
    { title: 'Yoshi finds eggs', snippet: 'Lorem djaoisdao siados j' },
    { title: 'Mario finds starts', snippet: 'Lorem djaoisdao siados j' },
    { title: 'How to defeat Bowser', snippet: 'Lorem djaoisdao siados j' }
  ]
  // res.send('<p> home page </p>') // authomatically sets content type
  // res.sendFile('/server_views/index.html', { root: __dirname })
  res.render('index', { title: 'Home', blogs })
})

app.get('/about', (req, res) => {
  // res.send('<p> about page </p>') // authomatically sets content type
  // res.sendFile('/server_views/about.html', { root: __dirname })
  res.render('about', { title: 'About' })
})

//redirect
app.get('/aboutme', (req, res) => {
  res.redirect('/about')
})

app.get('/blogs/create', (req, res) => {
  res.render('create', { title: 'Create a new blog' })
})

// 404 page is fired if none of the code before is ran
app.use((req, res) => {
  // res.status(404).sendFile('/server_views/404.html', { root: __dirname })
  res.status(404).render('404', { title: '404' })
})