var code = require('../js/main.js');

console.log(code);
//Problem 1
describe('return highest num', function() {
  it('returns largest of three random numbers', function() {
    expect(code.findLargestThree([1,2,3])).toEqual(3);
  });
});

//Problem 2
describe('odd array', function() {
  it('returns odd numbers from 40 to random number in array', function() {
    expect(code.returnOddArray(20)).toEqual(20);
    expect(code.returnOddArray(46)).toEqual([41, 43, 45]);
  });
});

//Problem 3
describe('returns even', function() {
  it('returns even numbers from 0 to random number', function() {
    expect(code.returnEvenArray(37)).toEqual([40,39,38,37]);
    expect(code.returnEvenArray(48)).toEqual([41,43,45,47]);
  });
});

//Problem 4
describe('return odd', function() {
  it('returns odd numbers from 40 to random number in array or countdown if less than 40', function() {
    expect(code.returnOddArray2(37)).toEqual([40,39,38,37]);
    expect(code.returnOddArray2(44)).toEqual([41,43]);
  });
});

//Problem 5
describe('return digit sum', function() {
  it('returns sum of all digits from random number', function() {
    expect(code.randomizeSum(1001)).toEqual(2);
  });
});

//Problem 6
describe('digit sum single digit', function() {
  it('returns sum of nuber digits as single digit', function() {
    expect(code.randomizeSumSingle(1001)).toEqual(2);
    expect(code.randomizeSumSingle(1256)).toEqual(8);
  });
});

//Problem 7
describe('common denominator', function() {
  it('returns highest common denominator of two numbers', function() {
    expect(code.divideBy([3,6])).toEqual(3);
    expect(code.divideBy([5,7])).toEqual('Sorry!');
  });
});

//Problem 8
describe('least common multiple', function() {
  it('returns least common multiple of two random numbers', function() {
    expect(code.findLeastCommon([8, 6])).toEqual(2);
  });
});

//Problem 9
// describe('return highest num', function() {
//   it('returns largest of three random numbers', function() {
//     expect().toEqual();
//   });
// });

