const fs = require('fs')
const path = require('path')

// Create folder
// fs.mkdir(path.join(__dirname, '/test'), {}, function (err) {
//   if (err) throw err;
//   console.log('Folder created');
// })

// // Create and write to file
// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'),
//   'Hello Worldd',
//   function (err) {
//     if (err) throw err;
//     console.log('Folder created');

//     // File append
//     fs.appendFile(path.join(__dirname, '/test', 'hello.txt'),
//       ' append part',
//       function (err) {
//         if (err) throw err;
//         console.log('Folder created');
//       })
//   })

// read file
fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', function (err, data) {
  if (err) throw err;
  console.log(data);
})

// rename file
fs.readFile(
  path.join(__dirname, '/test', 'hello.txt'),
  path.join(__dirname, '/test', 'helloworld.txt'),
  err => {
    if (err) throw err;
    console.log('File rename ...');
  })

