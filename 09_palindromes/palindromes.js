const palindromes = function (string) {
    let arr = string.replace(/[^a-z]/ig, '').toLowerCase();
    return arr === arr.split('').reverse().join('');
};

// console.log(palindromes('race CAR'));
// console.log(palindromes('2A3 3a2'));
// console.log(palindromes('eye'));
// console.log(palindromes('1 eye for of 1 eye.'));
// console.log(palindromes('stack'));
// palindromes('RaceCar!')
// console.log(palindromes('RaceCar!'))


// Do not edit below this line
module.exports = palindromes;
