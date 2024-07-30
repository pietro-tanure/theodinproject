import { expect, test, it } from "vitest";
import { capitalize, reverseString, calculator, caesarCipher, analyseArray } from "./functions";

test('capitalize', () => {
  expect(capitalize('test')).toBe('Test')
})

test('reverseString', () => {
  expect(reverseString('Test WORDS')).toBe('SDROW tseT')
})

test('calculator sum', () => {
  const calc = calculator();
  expect(calc.sum(2, 4)).toBe(6)
})

test('calculator subtract', () => {
  const calc = calculator();
  expect(calc.subtract(2, 4)).toBe(-2)
})

test('calculator divide', () => {
  const calc = calculator();
  expect(calc.divide(2, 4)).toBe(0.5)
})

test('calculator multiply', () => {
  const calc = calculator();
  expect(calc.multiply(2, 4)).toBe(8)
})

test('caesar Cipher', () => {
  expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!')
})

test('analyse Array', () => {
  let data = [1, 8, 3, 4, 2, 6];
  expect(analyseArray(data)).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6
  })
})

it('it == test', () => {
  expect(capitalize('test')).toBe('Test')
})