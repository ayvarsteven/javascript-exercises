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
// Do not edit below this line
module.exports = removeFromArray;
