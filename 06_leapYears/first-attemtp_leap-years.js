const leapYears = function(year) {
    if (year % 4 === 0) {
        return true
    } else if (year % 100 === 0) {
        return false
    } else if ((year % 100 === 0) && (year % 400 === 0)) {
        return false
    } else if (year % 100 === 0 && year % 400 === 0) {
        return true
    } else {
        return false
    }
};

function checkYear (year) {
    if (year % 4 != 0) {
        return false
    } else if (year % 100 != 0) {
        return true
    } else if (year % 400 != 0) {
        return false
    } else {
        return true
    }
}
console.log(1900 % 400 === 0)
const test1 = checkYear(1900);
const test2 = checkYear(1600);
const test3 = checkYear(700);
console.log(test1);
console.log(test2);
console.log(test3);