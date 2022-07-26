const removeFromArray = function(array, num) {
    const arrayRemoved = array;
    for (let i = 0; i < arrayRemoved.length; i++) {
        if (arrayRemoved[i] === num) {
            arrayRemoved.splice(arrayRemoved[i - 1], 1);
        }
    }
    return arrayRemoved
};

removeFromArray([1,2,3,4], 3)

// function removeFromArray(arrayRemoved, ...itemsRemoved) {
//   itemsRemoved = [...itemsRemoved];
//   arrayRemoved.splice(0, itemsRemoved[0])
//   return arrayRemoved
// }


// const test = removeFromArray([1, 2, 3, 4], 2, 4);

// console.log(test);

// Do not edit below this line
module.exports = removeFromArray;
