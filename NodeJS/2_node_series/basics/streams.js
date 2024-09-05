const fs = require('fs')

const readStream = fs.createReadStream(__dirname + '/stream.txt')//, { encoding: 'utf8' })
const writeStream = fs.createWriteStream(__dirname + '/streamwrite.txt')

// readStream.on('data', (chunk) => {
//   console.log(`---- new chunk-----`)
//   console.log(chunk)
//   writeStream.write('\n new chuck \n');
//   writeStream.write(chunk)
// })

//piping
readStream.pipe(writeStream)