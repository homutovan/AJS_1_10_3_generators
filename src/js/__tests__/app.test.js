import canIterate from '../app';

const testCase = [
  [new Map(), true],
  [new Set(), true],
  [null, false],
  [10, false],
  ['Netology', true],
  [[], true],
  [{}, false],
  [undefined, false],
  [NaN, false],
  [Infinity, false],
];

test.each(testCase)(('Test №%#: check canIterate, testObject: %p, rsult: %p'),
  (testObject, rsult) => {
    expect(canIterate(testObject)).toBe(rsult);
  });
