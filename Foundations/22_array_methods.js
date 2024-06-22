//map
function addOne(num) {
    return num + 1;
}
const arr = [1, 2, 3, 4, 5];
const mappedArr = arr.map(addOne);
console.log(mappedArr); // Outputs [2, 3, 4, 5, 6]

//filter
function isOdd(num) {
    return num % 2 !== 0;
}
const arr2 = [1, 2, 3, 4, 5];
const oddNums = arr2.filter(isOdd);
console.log(oddNums); // Outputs [1, 3, 5];
console.log(arr); // Outputs [1, 2, 3, 4, 5], original array is not affected
  
//reduce
const arr3 = [1, 2, 3, 4, 5];
const productOfAllNums = arr3.reduce((total, currentItem) => {
  return total * currentItem;
}, 1);
console.log(productOfAllNums); // Outputs 120;
console.log(arr); // Outputs [1, 2, 3, 4, 5]