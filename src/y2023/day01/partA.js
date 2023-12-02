'use strict';

export const getTwoDigitNumber = function(line) {
  const twoDigitNumber = [];
  for (let i = 0; i <= line.length; i++) {
    const digit = parseInt(line.charAt(i));
    if (digit) {
      twoDigitNumber.push(digit);
      break;
    }
  }

  for (let i = line.length - 1; i >= 0; i--) {
    const digit = parseInt(line.charAt(i));
    if (digit) {
      twoDigitNumber.push(digit);
      break;
    }
  }

  return +twoDigitNumber.join('');
};