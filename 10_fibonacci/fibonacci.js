// const fibonacciArray = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]; 

const fibonacci = function(n) {
    if(n < 0 ) return 'OOPS'
    if(n < 3) return 1
    let a = 1;
    let b = 1;

    for(i =2; i < n; i++) {
        const c = a + b
        a = b
        b = c
    }
    return b
}

// console.log(fibonacci(-1)) // should return 2 
// console.log(fibonacci(0)) // should return 3 
// console.log(fibonacci(3)) // should return 2 
// console.log(fibonacci(6)) // should return 8 
// console.log(fibonacci(10)) // should return 55 
// console.log(fibonacci(15)) // should return 610 

// Do not edit below this line
module.exports = fibonacci;
