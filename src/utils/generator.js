const crypto = require('crypto');

/**
 * Generates a random digits string of the given length.
 *
 * @param {number} length Length of the string to generate
 *
 * @returns string of X random digits
 */
const generateRandomDigitString = (length) => {
  if (Number.isNaN(parseInt(length, 10))) {
    throw new Error('Length must be a valid integer.');
  }

  let str = '';
  for (let i = 0; i < length; i += 1) {
    const digit = Math.random();
    // To get our numbers, we get the first decimal digit
    // of a random float between 0 and 1. Using 2 for charAt go
    // over the 0. part.
    const decimal = (digit - Math.floor(digit)).toString().charAt(2);
    str = str.concat(decimal);
  }
  return str;
};

const generateApiKey = (length = 32) => {
  if (Number.isNaN(parseInt(length, 10))) {
    throw new Error('Length must be a valid integer.');
  }
  const rand = crypto.randomBytes(length);
  const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  let key = '';

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < rand.length; i++) {
    const index = rand[i] % chars.length;
    key += chars[index];
  }
  return key;
};

module.exports = {
  generateRandomDigitString,
  generateApiKey,
};
