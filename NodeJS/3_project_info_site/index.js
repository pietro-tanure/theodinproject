const http = require('http')
const fs = require('fs').promises;
const path = require('path')

http.createServer((req, res) => {
  // create path
  let filePath = path.join(
    __dirname,
    'views',
    req.url === '/' ? 'index.html' : `${req.url}.html`);

  fs.readFile(filePath)
    .then(content => {
      // Success
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(content, 'utf8');
    })
    .catch(err => {
      if (err.code === 'ENOENT') {
        // Page not found
        return fs.readFile(path.join(__dirname, 'views', '404.html'))
          .then(content => {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content, 'utf8');
          });
      } else {
        // Some server error
        res.writeHead(500);
        res.end(`Server Error: ${err.code}`);
      }
    });

}).listen(8080)
// http://localhost:8080/contact-me