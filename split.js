const split = (number) => {
  const n = number.toString().length;
  if (!isFinite(number) || n === 1) {
    throw Error(`Cannot split number = ${number}`);
  }

  const n2 = Math.floor(n / 2);
  const divider = 10 ** n2;

  const num1 = Math.floor(number / divider);
  const num2 = number % divider;

  return [num1, num2];
};

module.exports = split;
