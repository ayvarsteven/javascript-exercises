function reverseString (string) {
    const splitString = string.split('');
    const reversed = splitString.reverse();
    const joined = reversed.join('');
    return joined
};

reverseString('hello')

// Do not edit below this line
module.exports = reverseString;
