// Fibonacci numbers are created in the following way:
//  - F(0) = 0
//  - F(1) = 1
//  - ...
//  - F(n) = F(n-2) + F(n-1)
// Write a function that calculates the nth Fibonacci number.
module.exports = (n) => {
    return fib(n)
}

function fib(n) {
    if (n==0) {
        return 0;
    }
    if (n==1) {
        return 1;
    } else {
        return fib(n - 1) + fib(n - 2)
    }
}