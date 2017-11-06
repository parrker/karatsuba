const split = require('./split');

const karatsuba = (integer1, integer2) => {
  if (integer1 < 10 || integer2 < 10) {
    return integer1 * integer2;
  }

  const n = Math.max(integer1.toString().length, integer2.toString().length);
  const n2 = Math.floor(n / 2);

  const [a, b] = split(integer1);
  const [c, d] = split(integer2);

  const ac = karatsuba(a, c);
  const bd = karatsuba(b, d);
  const abcd = karatsuba(a + b, c + d);
  const magic = abcd - ac - bd;

  return ac * 10 ** (2 * n2) + magic * 10 ** n2 + bd;
};

module.exports = karatsuba;
