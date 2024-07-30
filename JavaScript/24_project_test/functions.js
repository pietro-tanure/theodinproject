export function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function reverseString(string) {
  return string.split("").reverse().join("")
}

export function calculator() {
  const sum = (a, b) => { return a + b };
  function subtract(a, b) { return a - b };
  function divide(a, b) { return a / b };
  const multiply = (a, b) => { return a * b };
  return { sum, subtract, divide, multiply };
}

export function caesarCipher(string, factor) {
  return string.split("").map((char) => {
    char = char.charCodeAt()
    if (char >= 65 && char <= 90) {
      char = (char - 65 + factor) % 26 + 65
    } else if (char >= 97 && char <= 122) {
      char = (char - 97 + factor) % 26 + 97
    }
    return String.fromCharCode(char)
  }).join("")
}

export function analyseArray(array) {
  let average = array.reduce((sum, num) => sum + num, 0) / array.length
  let max = Math.max(...array)
  let min = Math.min(...array)
  let length = array.length
  return { average, max, min, length }
}