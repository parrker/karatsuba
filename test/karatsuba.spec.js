const karatsuba = require('../karatsuba');

describe('karatsuba function', () => {
  it('should return a correct multiplication result for 1234 * 5678', () => {
    const product = karatsuba(1234, 5678);

    expect(product).toBe(7006652);
  });

  it('should return a correct multiplication result for 12345 * 67890', () => {
    const product = karatsuba(12345, 67890);

    expect(product).toBe(838102050);
  });

  it('should return a correct multiplication result for 1234567890 * 5678901234', () => {
    const product = karatsuba(1234567890, 5678901234);

    expect(product).toBe(7010989113977776000);
  });

  it('should return correct multiplication results for 1-digit integers', () => {
    const product1 = karatsuba(1, 4);
    const product2 = karatsuba(9, 8);
    const product3 = karatsuba(0, 1);
    const product4 = karatsuba(0, 0);
    const product5 = karatsuba(3, 2);

    expect(product1).toBe(4);
    expect(product2).toBe(72);
    expect(product3).toBe(0);
    expect(product4).toBe(0);
    expect(product5).toBe(6);
  });
});
