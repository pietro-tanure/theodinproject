const http = require('http')
const fs = require('fs')
const _ = require('lodash')

const server = http.createServer((req, res) => {
  // console.log('request made')
  // console.log(req.url, req.method)  //request object
  // res.write('<head> <link rel ="stylesheet" href="#"></head>')
  // res.write(`<p> hello, ninjas </p>`)
  // res.end()
  // send html file

  // lodash
  console.log(_.random(0, 20))
  const greet = _.once(() => {
    console.log('hello')
  })
  greet()
  greet() // it's only ran once

  // set header content type
  res.setHeader('Content-type', 'text/html');

  let path = '/server_views/';
  switch (req.url) {
    case '/':
      path += 'index.html';
      res.statusCode = 200;
      break
    case '/about':
      path += 'about.html'
      res.statusCode = 200
      break
    case '/aboutme':
      res.setHeader('Location', '/about')
      res.statusCode = 301
      break
    default:
      path += '404.html'
      res.statusCode = 404;
      break
  }

  fs.readFile(__dirname + path, (err, data) => {
    if (err) {
      console.log(err)
      res.end()
    } else {
      res.write(data)
      res.end()
    }
  })
});

server.listen(3000, 'localhost', () => {
  console.log('listening for requests on port 3000')
}) // http://localhost:3000