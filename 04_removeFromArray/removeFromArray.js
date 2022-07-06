const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

const removeFromArray = function([], num) {
    for (let i = 0; i < testArray.length; i++) {
        const element = testArray[i];
        if (testArray[i] === num) {
            testArray.splice(testArray[i - 1], 1);
        }
        console.log(testArray[i]);
    }
};

removeFromArray([1,2,3,4], 12)
// Do not edit below this line
module.exports = removeFromArray;
