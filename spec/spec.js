var code = require('../js/main.js');

console.log(code);
//Problem 1 - PASSED
describe('return highest num', function() {
  it('returns largest of three random numbers', function() {
    expect(code.findLargestThree([1,2,3])).toEqual(3);
  });
});

//Problem 2 - PASSED
describe('odd array', function() {
  it('returns odd numbers from 40 to random number in array', function() {
    expect(code.returnOddArray(20)).toEqual(20);
    expect(code.returnOddArray(46)).toEqual([41, 43, 45]);
  });
});

//Problem 3 - PASSED
describe('returns even', function() {
  it('returns even numbers from 0 to random number', function() {
    expect(code.returnEvenArray(10)).toEqual([0,2,4,6,8]);
  });
});

//Problem 4
describe('return odd', function() {
  it('returns odd numbers from 40 to random number in array or countdown if less than 40', function() {
    expect(code.returnOddArray2(37)).toEqual([40,39,38,37]);
    expect(code.returnOddArray2(44)).toEqual([41,43]);
  });
});

//Problem 5 - PASSED
describe('return digit sum', function() {
  it('returns sum of all digits from random number', function() {
    expect(code.randomizeSum(123)).toEqual(6);
  });
});

//Problem 6 - PASSED
describe('digit sum single digit', function() {
  it('returns sum of nuber digits as single digit', function() {
    expect(code.randomizeSumSingle(123)).toEqual(6);
    expect(code.randomizeSumSingle(1256)).toEqual(8);
  });
});

//Problem 7 - Passed, but add sorry clause
describe('common denominator', function() {
  it('returns highest common denominator of two numbers', function() {
    expect(code.divideBy(9,6)).toEqual(3);
    //expect(code.divideBy([5,7])).toEqual('Sorry!');
  });
});

//Problem 8 - PASSED
describe('least common multiple', function() {
  it('returns least common multiple of two random numbers', function() {
    expect(code.findLeastCommon(8, 6)).toEqual(2);
  });
});

//Problem 9
describe('return highest num', function() {
  it('returns largest of three random numbers', function() {
    expect(code.findDeviation(16, 50)).toEqual([33, 17]);
  });
});

