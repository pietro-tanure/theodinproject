// The fs module provides a lot of very useful functionality
//  to access and interact with the file system.

// One peculiar thing about the fs module is that all the methods 
// are asynchronous by default, but they can also work synchronously by appending Sync.
const fs = require('fs');

fs.rename('before.json', 'after.json', err => {
  if (err) {
    return console.error(err);
  }
  // done
});

// using try catch
try {
  fs.renameSync('after.json', 'before.json');
  // done
} catch (err) {
  console.error(err);
}


// Example: Read a file and change its content and read
// it again using callback-based API.
const fileName = 'before.json';
fs.readFile(fileName, 'utf8', (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data);
  const content = 'Some content!';
  fs.writeFile(fileName, content, err2 => {
    if (err2) {
      console.log(err2);
      return;
    }
    console.log('Wrote some content!');
    fs.readFile(fileName, 'utf8', (err3, data3) => {
      if (err3) {
        console.log(err3);
        return;
      }
      console.log(data3);
    });
  });
});

// Example: Read a file and change its content and read
// it again using promise-based API.
const fs3 = require('fs/promises');
async function example() {
  const fileName = 'before.json';
  try {
    const data = await fs3.readFile(fileName, 'utf8');
    console.log(data);
    const content = 'Some other content!';
    await fs3.writeFile(fileName, content);
    console.log('Wrote some other content!');
    const newData = await fs.readFile(fileName, 'utf8');
    console.log(newData);
  } catch (err) {
    console.log(err);
  }
}
example();