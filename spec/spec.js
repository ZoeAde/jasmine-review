var code = require('../js/main.js');

//Problem 1
describe('return highest num', function() {
  it('returns largest of three random numbers', function() {
    expect([1,2,3]).toEqual(3);
  });
});

//Problem 2
describe('return odd', function() {
  it('returns odd numbers from 40 to random number in array', function() {
    expect(20).toEqual(20);
    expect(42).toEqual([40, 41, 42]);
  });
});

//Problem 3
describe('returns even', function() {
  it('returns even numbers from 0 to random number', function() {
    expect(array[1]).not.toBe(odd);
  });
});

//Problem 4
describe('return odd', function() {
  it('returns odd numbers from 40 to random number in array or countdown if less than 40', function() {
    expect(37).toEqual([40,39,38,37]);
    expect(44).toEqual([41,43]);
  });
});

//Problem 5
describe('return digit sum', function() {
  it('returns sum of all digits from random number', function() {
    expect(1001).toEqual(2);
  });
});

//Problem 6
describe('digit sum single digit', function() {
  it('returns sum of nuber digits as single digit', function() {
    expect(1001).toEqual(2);
    expect(1256).toEqual(8);
  });
});

//Problem 7
describe('common denominator', function() {
  it('returns highest common denominator of two numbers', function() {
    expect([3,6]).toEqual(3);
    expect([5,7]).toEqual('Sorry!');
  });
});

//Problem 8
describe('least common multiple', function() {
  it('returns least common multiple of two random numbers', function() {
    expect([8, 6]).toEqual(2);
  });
});

//Problem 9
// describe('return highest num', function() {
//   it('returns largest of three random numbers', function() {
//     expect().toEqual();
//   });
// });

