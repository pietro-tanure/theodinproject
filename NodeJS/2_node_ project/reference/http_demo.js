const http = require('http')

http.createServer((req, res) => {
  // wirte reponse
  res.write('Hello world')
  res.end()
}).listen(5000, () => console.log('Server running...'))
// http://localhost:5000/