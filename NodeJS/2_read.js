const fs = require('node:fs');

fs.readFile('write_test.json', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});

// synchronous version
try {
  const data = fs.readFileSync('write_test.json', 'utf8');
  console.log(data);
} catch (err) {
  console.error(err);
}

//promise
const fs = require('node:fs/promises');
async function example() {
  try {
    const data = await fs.readFile('write_test.json', { encoding: 'utf8' });
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}
example();
