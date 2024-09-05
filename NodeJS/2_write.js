const fs = require('node:fs');

const content = 'Some content!';
fs.writeFile('write_test.json', content, err => {
  if (err) {
    console.error(err);
  } else {
    // file written successfully
  }
});

// synchronous version
try {
  fs.writeFileSync('write_test.json', content);
} catch (err) {
  console.error(err);
}

// promise-based
const fsp = require('node:fs/promises');
async function example() {
  try {
    const content = 'Some content2!';
    await fsp.writeFile('write_test.json', content);
  } catch (err) {
    console.log(err);
  }
}
example();

// modify value using flag a+ (https://nodejs.org/api/fs.html#file-system-flags)
fs.writeFile('write_test.json', "content", { flag: 'a+' }, err => { });

// appending content to file
fs.appendFile('write_test.json', content, err => {
  if (err) {
    console.error(err);
  } else {
    // done!
  }
});

// using promises
async function example2() {
  try {
    const content = 'Some content3!';
    await fsp.appendFile('write_test.json', content);
  } catch (err) {
    console.log(err);
  }
}
example2();
