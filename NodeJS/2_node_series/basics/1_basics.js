console.log(global)

global.setTimeout(() => {
  console.log('timeout aa')
  clearInterval(int)
}, 3000)

const int = setInterval(() => {
  console.log('in inverval')
}, 2000)

// console.log(document.querySelector) // this doesnt work, because node is on the server side

const people = ['yoshi', 'pietro', 'pedro']
console.log(people)
console.log(__filename)
const ages = [12, 20, 30]

module.exports = { people, ages }