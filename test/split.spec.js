const split = require('../split');

describe('split helper function', () => {
  it('splits 4-digit number into two 2-digit numbers', () => {
    const number = 1234;

    const [num1, num2] = split(number);

    expect(num1).toBe(12);
    expect(num2).toBe(34);
  });

  it('splits 5-digit number into a 3- and 2-digit number', () => {
    const number = 12345;

    const [num1, num2] = split(number);

    expect(num1).toBe(123);
    expect(num2).toBe(45);
  });

  it('splits a 7-digit number into 4- and 3-digit number', () => {
    const number = 1234567;

    const [num1, num2] = split(number);

    expect(num1).toBe(1234);
    expect(num2).toBe(567);
  });

  it('throws an error, if unsplittable number is passed', () => {
    expect(() => split(1)).toThrow();
    expect(() => split(0)).toThrow();
    expect(() => split(Infinity)).toThrow();
    expect(() => split(-Infinity)).toThrow();
  });
});
