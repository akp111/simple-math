import { add, sub, mul, div, mod, total, avg } from '../index';

test('Test add function', () => {
  expect(add(1, 2)).toBe(3);
});
test('Test add function with decimal', () => {
  expect(add(1.1, 2)).toBe(3.1);
});
test('Test sub function', () => {
  expect(sub(1, 2)).toBe(-1);
});

test('Test mul function', () => {
  expect(mul(10000000000000, 10000000000000)).toBe(100000000000000000000000000);
});

test('Test div function', () => {
  expect(div(10000000000000, 10000000000000)).toBe(1);
});

test('Test mod function', () => {
  expect(mod(10000000000000, 10000000000000)).toBe(0);
});

test('Test total function', () => {
  expect(total([1, 1, 1, 1, 1])).toBe(5);
});

test('Test avg function', () => {
  expect(avg([1, 1, 1, 1, 1])).toBe(1);
});
