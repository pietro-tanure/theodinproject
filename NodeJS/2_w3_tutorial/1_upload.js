var http = require('http');
var formidable = require('formidable');
var fs = require('fs');

http.createServer(function (req, res) {
  if (req.url == '/fileupload') {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      var oldpath = files.filetoupload[0].filepath;
      console.log("TABACO:   " + oldpath)
      var newpath = './' + files.filetoupload[0].originalFilename;
      // fs.rename(oldpath, newpath, function (err) {
      //   if (err) throw err;
      //   res.write('File uploaded and moved!');
      //   res.end();
      // });
      fs.copyFile(oldpath, newpath, function (err) {
        if (err) throw err;
        // Delete the file from the temporary location
        fs.unlink(oldpath, function (err) {
          if (err) throw err;
          res.write('File uploaded and moved!');
          res.end();
        });
      });
    });
  } else {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
  }
}).listen(8080);

// http://localhost:8080/