'use strict';

const WORDS_DIGITS = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

const WORD_DIGIT_MAP = new Map(Object.entries({
  'one': '1',
  'two': '2',
  'three': '3',
  'four': '4',
  'five': '5',
  'six': '6',
  'seven': '7',
  'eight': '8',
  'nine': '9',
}));

export const getTwoDigitNumber = function (line) {
  const minOccurrences = new Map();
  const maxOccurrences = new Map();

  for (const word of WORDS_DIGITS) {
    const indexOf = line.indexOf(word);
    if (indexOf >= 0) 
      minOccurrences.set(word, indexOf);

    const lastIndexOf = line.lastIndexOf(word);
    if (lastIndexOf >= 0) 
      maxOccurrences.set(word, lastIndexOf);
  }

  let minKey, minValue = '';
  for (const [key, value] of minOccurrences) {
    if (minValue === '' || value < minValue) {
      minKey = key;
      minValue = value;
    }
  }

  let maxKey, maxValue = '';
  for (const [key, value] of maxOccurrences) {
    if (maxValue === '' || value > maxValue) {
      maxKey = key;
      maxValue = value;
    }
  }

  const min = WORD_DIGIT_MAP.get(minKey) ?? minKey;
  const max = WORD_DIGIT_MAP.get(maxKey) ?? maxKey;

  return +(min + max);
};