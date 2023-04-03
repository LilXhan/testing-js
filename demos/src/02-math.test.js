const {
  sum, multiply, divide, average,
} = require('./02-math');

test('adds 1 + 3 equals 3', () => {
  const rta = sum(1, 3);
  expect(rta).toBe(4);
});

test('multiply 1 * 3 equals 3', () => {
  const rta = multiply(1, 3);
  expect(rta).toBe(3);
});

test('divide 6 / 3 equals 2', () => {
  const rta = divide(6, 3);
  expect(rta).toBe(2);
  const rta2 = divide(5, 2);
  expect(rta2).toBe(2.5);
});

test('should divide for zero', () => {
  const rta = divide(6, 0);
  expect(rta).toBeNull();
  const rta2 = divide(5, 0);
  expect(rta2).toBeNull();
});

test('average 10 and 20 equals 15', () => {
  const rta = average(10, 20);
  expect(rta).toBe(15);
});
