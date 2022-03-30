const { generateApiKey, generateRandomDigitString } = require('../../../src/utils/generator');

describe('Generator Tests', () => {
  // generateApiKey ------------------------------------------------
  test('generateApiKey_ZeroLength_ReturnsEmptyString', () => {
    const result = generateApiKey(0);
    expect(result).toBe('');
  });
  test('generateApiKey_XLength_ReturnsXLengthRandomDigitString', () => {
    for (let i = 1; i < 10; i += 1) {
      const result = generateApiKey(i);
      expect(result.length).toBe(i);
    }
  });
  test('generateApiKey_LengthNotANumber_ExceptionThrown', () => {
    expect(() => {
      generateApiKey('A');
    }).toThrow();
  });

  test('generateRandomDigitString_ZeroLength_ReturnsEmptyString', () => {
    const result = generateRandomDigitString(0);
    expect(result).toBe('');
  });
  // generateRandomDigitString ------------------------------------------------
  test('generateRandomDigitString_XLength_ReturnsXLengthRandomDigitString', () => {
    for (let i = 1; i < 10; i += 1) {
      const result = generateRandomDigitString(i);
      expect(result.length).toBe(i);
    }
  });
  test('generateRandomDigitString_LengthNotANumber_ExceptionThrown', () => {
    expect(() => {
      generateRandomDigitString('A');
    }).toThrow();
  });
});
