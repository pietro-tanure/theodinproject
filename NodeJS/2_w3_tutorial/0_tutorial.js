var http = require('http');
const url = require('node:url');
var fs = require('fs');

http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' });

  res.write("The date and time are currently: " + myDateTime());
  let q = url.parse(req.url, true)
  console.log(q.host); //returns 'localhost:8080'
  console.log(q.pathname); //returns '/default.htm'
  console.log(q.search); //returns '?year=2017&month=february'
  let txt = q.year + " " + q.month;

  let filename = q.pathname.slice(1);
  try {
    let data = fs.readFileSync(filename)
    res.write(data);
  } catch (err) {
    console.error(err);
  }

  res.end(txt + '\n Hello World!');

  fs.appendFile('mynewfile1.txt', "append to file, ", function (err) {
    if (err) throw err;
    console.log('saved');
  })

  fs.writeFile('mynewfile2.txt', "create new file, ", function (err) {
    if (err) throw err;
    console.log('saved write');
  })

  fs.unlink('mynewfile2.txt', function (err) {
    if (err) throw err;
    console.log('file deleted')
  })

  fs.rename('mynewfile1.txt', 'mynewfile3.txt', function (err) {
    if (err) throw err;
    console.log('file renamed')
  })

}).listen(8080);  // 'http://localhost:8080/winter.html?year=2017&month=february'

myDateTime = function () {
  // export.myDateTime = function ()
  // Use the exports keyword to make properties and methods available outside the module file.
  return Date();
}; 