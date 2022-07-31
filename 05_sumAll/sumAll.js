const sumAll = function (a, b) {
  for (i = 0; i < arguments.length; i++) {
    if (typeof arguments[i] === "string") {
      return "ERROR";
    } else if (typeof arguments[i] === "object") {
      return "ERROR";
    } else if(arguments[i] < 0) {
      return "ERROR"
    }
  }
  let addedNumbers = [];
  let sumNums = 0;
  for (i = 0; i <= a; i++) {
    addedNumbers.splice(i, 0, i);
  }
  for (i = 0; i <= b; i++) {
    addedNumbers.splice(i, 0, i);
  }

  const reducedArray = addedNumbers.filter((c, index) => {
    return addedNumbers.indexOf(c) === index;
  });

  console.log(reducedArray);
  for (i = 0; i < reducedArray.length; i++) {
    sumNums += reducedArray[i];
  }

  return sumNums;
};

// Do not edit below this line
module.exports = sumAll;
