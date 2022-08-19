const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(arrayOfNums) {
  let sum = 0;
  for (i=0; i < arrayOfNums.length; i++) {
    sum += arrayOfNums[i];
  }
  return sum
};

const multiply = function(arrayInput) {
  let result = 1;
  for(i = 0; i < arrayInput.length; i++) {
    result = arrayInput[i] * result
  }
  return result
};


const power = function(baseNum, exponent) {
    let result = undefined;
    for(i = 0; i < exponent; i++) {
        result = baseNum ** exponent
    }
    return result
};

const factorial = function(num) {
  if (num === 0 || num === 1) 
    return 1
  for (let i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return num
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
