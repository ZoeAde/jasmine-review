module.exports = {

//Problem 1
// Write a function that takes three random numbers from 0 to 100 and returns the largest one.
findLargestThree : function(arr) {
  return Math.max.apply(Math, arr);
},

//Problem 2
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

//Problem 3
// Write a function that takes a random number from 0 to 100 and returns all the even numbers from 0 to the randomized number in an array.
returnEvenArray : function(number) {
  var arr = [];
  for (var i = 0; i < number; i++) {
    if (i % 2 === 0) {
      arr.push(i);
    }
  }
  return arr;
},

//Problem 4
// Write a function that takes a random number from 0 to 100 and returns the all the odd numbers from 40 to that random number in an array. If the number is smaller than 40, return all the numbers down to the randomized one in an array - i.e., if the number is 37, you should return [40, 39, 38, 37].
returnOddArray2 : function(num) {
  var arr = [];
  if (num < 40) {
    for (var i = 40; i >= num; i--) {
      arr.push(i);
    }
  }
  else if (num > 40) {
    for (var j = 41; j < num; j+=2) {
      arr.push(j);
    }
  }
  return arr;
},

//Problem 5
// Write a function that takes a random number from 0 to 10,0000 and returns the sum of its digits. For instance, if the randomized number is 1049, the function should return 14.
randomizeSum : function(number) {
  var numString = number.toString();
  var sum = 0;
  for (var i = 0; i < numString.length; i++) {
    sum += parseInt(numString[i]);
  }
  return sum;
},

//Problem 6
// Write a function that takes a random number from 0 to 10,0000 and calculates the sum of its digits repeatedly as long as the sum is a single digit. Return that number. For instance, if the randomized number is 1049, the function should return 5.
randomizeSumSingle : function(number) {
  var numString = number.toString();
  var sum = 0;
  for (var i = 0; i < numString.length; i++) {
    sum += parseInt(numString[i]);
    if (sum >= 10) {
      sum -= parseInt(numString[i]);
    }
  }
  return sum;
},

//Problem 7
// Write a function that takes two random numbers from 0 to 100 and returns the smaller number that is greater than one, such that both numbers are divided by it with no remainder. For instance, for 9 and 6 you should print 3. If there isn't one, simply return "Sorry!".
divideBy : function(num1, num2) {
  for (var i = 2; i < num1; i++) {
    if (num1 % i === 0 && num2 % i === 0) {
      return i;
    }
  }
},
//need to add 'Sorry!'


//Problem 8
// Write a function that takes two random numbers from 0 to 100 and returns their least common multiple of them.
findLeastCommon : function(num1, num2) {
  for (var i = num1; i > 0; i--) {
    if (num1 % i === 0 && num2 % i === 0) {
      return i;
    }
  }
},

//Problem 9
// Write a function that takes two randomized numbers and returns their average and standard deviation.
findDeviation : function(num1, num2) {
  var arr = [];
  var avg = parseInt(((num1 + num2) / 2).toFixed(0));
  var square1 = Math.pow((num1 - avg), 2);
  var square2 = Math.pow((num2 - avg), 2);
  var avgSquare = (square1 + square2) / 2;
  var standardDev = parseInt(Math.sqrt(avgSquare).toFixed(2));
  arr.push(avg);
  arr.push(standardDev);
  return arr;
}

};

