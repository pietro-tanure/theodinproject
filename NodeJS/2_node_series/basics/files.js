const fs = require('fs')

// read file
fs.readFile(__dirname + '/read.txt', (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data.toString())
})

console.log('last line')

// write file
fs.writeFile(__dirname + '/write.txt', 'hello world', () => {
  console.log('file written')
})

//directories
if (!fs.existsSync(__dirname + '/dir'))
  fs.mkdir(__dirname + '/dir', (err) => {
    if (err) {
      console.log(err)
    }
    console.log('folder created')
  })
else {
  fs.rmdir(__dirname + '/dir', (err) => {
    if (err) console.log(err)
    console.log('folder deleted')
  })
}

//deleting file
if (fs.existsSync(__dirname + '/write.txt')) {
  fs.unlink(__dirname + '/write.txt', (err) => {
    console.log(err)
  })
  console.log('file deleted')
}