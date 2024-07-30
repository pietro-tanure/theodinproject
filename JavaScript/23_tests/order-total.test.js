import { expect, test } from 'vitest'
import orderTotal from './order-total'

test('works', () => {
  expect(1).toBe(1)
})

test('Check fail: Happy path', () => {
  expect(orderTotal({
    items: [
      { name: 'Dragon food', price: 8, quantity: 1 },
      { name: "Dragon cage (small)", price: 800, quantity: 1 }
    ]
  })).toBe(808)
})

test('Check fail: Happy path (example 2)', () => {
  expect(orderTotal({
    items: [
      { name: 'Dragon collar', price: 20, quantity: 1 },
      { name: "Dragon chew toy", price: 40, quantity: 1 }
    ]
  })).toBe(60)
})

test('Check fail: Quantity', () => {
  expect(orderTotal({
    items: [
      { name: 'Dragon candy', price: 2, quantity: 3 },
    ]
  })).toBe(6)
})

test('Check fail: No quantity', () => {
  expect(orderTotal({
    items: [
      { name: 'Dragon candy', price: 3 },
    ]
  })).toBe(3)
})