function removeFromArray(myArray, ...variousParams) {
  for (i = myArray.length - 1; i >= 0; i--) {
    for (parameter of variousParams) {
      if (myArray[i] === parameter) {
        myArray.splice(i, 1);
      }
    }
  }
  return myArray;
}

// Do not edit below this line
module.exports = removeFromArray;
