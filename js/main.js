module.exports = {
// Write a function that takes three random numbers from 0 to 100 and returns the largest one.

findLargestThree : function(arr) {
  return Math.max.apply(Math, arr);
},

// Write a function that takes a random number from 0 to 100 and returns all the odd numbers from 40 to that random number in an array. If the number is smaller than output the number.
returnOddArray : function(num) {
  if (num < 40) {
    return num;
  }
  else if (40 <= num <= 100) {
    var arr = [];
    for (var i = 40; i < num; i++) {
      if (i % 2 !== 0) {
      arr.push(i);
      }
    }
    return arr;
  }
},

// Write a function that takes a random number from 0 to 100 and returns all the even numbers from 0 to the randomized number in an array.
returnEvenArray : function() {
  var number = Math.floor(Math.random * 100);
  var arr = [];
  for (var i = 0; i < number; i++) {
    if (i % 2 === 0) {
      arr.push(i);
    }
  }
  return arr;
},

// Write a function that takes a random number from 0 to 100 and returns the all the odd numbers from 40 to that random number in an array. If the number is smaller than 40, return all the numbers down to the randomized one in an array - i.e., if the number is 37, you should return [40, 39, 38, 37].
returnOddArray2 : function(num) {
  if (num < 40) {
    for (var i = 40; i < num; i--) {
      arr.push(i);
    }
  }
  else if (40 <= num <= 100) {
    for (var j = 40; j < num; j++) {
      if (j % 2 !== 0) {
      arr.push(j);
      }
    }
  }
  return arr;
},

// Write a function that takes a random number from 0 to 10,0000 and returns the sum of its digits. For instance, if the randomized number is 1049, the function should return 14.
randomizeSum : function() {
  var number = Math.floor(Math.random * 10000);
  var sum = 0;
  for (var i = 0; i < number.length; i++) {
    sum += i;
  }
  return sum;
},

// Write a function that takes a random number from 0 to 10,0000 and calculates the sum of its digits repeatedly as long as the sum is a single digit. Return that number. For instance, if the randomized number is 1049, the function should return 5.

randomizeSumSingle : function() {
  var number = Math.floor(Math.random * 10000);
  var sum = 0;
  for (var i = 0; i < number.length; i++) {
    sum += i;
    if (sum > 10) {
      sum -= i;
      return sum;
    }
  }
},

// Write a function that takes two random numbers from 0 to 100 and returns the smaller number that is greater than one, such that both numbers are divided by it with no remainder. For instance, for 9 and 6 you should print 3. If there isn't one, simply return "Sorry!".
divideBy : function() {
  var numberOne = Math.floor(Math.random * 100);
  var numberTwo = Math.floor(Math.random * 100);
  for (var i = 0; i < 100; i++) {
    if (numberOne % i === 0 && numberTwo % i === 0) {
      return i;
    }
  }
},
//need to add 'Sorry!'



// Write a function that takes two random numbers from 0 to 100 and returns their least common multiple of them.
findLeastCommon : function() {
  var numberOne = Math.floor(Math.random * 100);
  var numberTwo = Math.floor(Math.random * 100);
  for (var i = 100; i > 0; i--) {
    if (numberOne % i === 0 && numberTwo % i === 0) {
      return i;
    }
  }
},

// Write a function that takes two randomized numbers and returns their average and standard deviation.


};

