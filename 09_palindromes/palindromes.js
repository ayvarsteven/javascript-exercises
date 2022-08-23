const palindromes = function (string) {
    const [...stringArray] = string
    const reversedArray = stringArray.concat().reverse();
    for (a = 0; a < stringArray.length; a++) {
        for(b = 0; b < reversedArray.length; b++) {
            if(stringArray[a] != reversedArray[b]) {
                return false
            } else {
                return true
            }
        }
    }
};

let test1 = palindromes('racecar')
console.log(test1)

// Do not edit below this line
module.exports = palindromes;
