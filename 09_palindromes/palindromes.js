const palindromes = function (string) {
    const [...stringArray] = string.toUpperCase();
    const reversedArray = stringArray.concat().reverse();
    for (a = 0; a < stringArray.length; a++) {
        for(b = 0; b < reversedArray.length; b++) {
            if(stringArray[a] == reversedArray[b]) {
                return true
            } else {
                return false
            }
        }
    }
};

console.log(palindromes('a nut for a jar of tuna'))
console.log(palindromes('rats live on no evil star'))

// Do not edit below this line
module.exports = palindromes;
