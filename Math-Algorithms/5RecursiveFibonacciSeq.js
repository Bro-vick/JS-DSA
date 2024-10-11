/*
    Problem - Giveb a number 'n', find the 'nth' elements of the fibonacci sequence
    Im Maths, the Fibonacci sequence is a sequence in which each number is the sum of the 
    two preceding ones.

    The first two numbers in the sequence are 0 and 1.
    fibonacci(2) = [0,1]
    fibonacci(3) = [0,1,1]
    fibonacci(7) = [0,1,1,2,3,5,8,13]

    Tips for recursive Solution
    Figure out how to break down the problem into smaller versions of the same problem
    Identify the base case for recursion.
    Fn = Fn-1 + Fn-2
*/

function recursiveFib(n){
    if (n < 2){
        return n;
    };
    console.log('test', n)
    console.log('test', n - 1)
    console.log('test', n - 2)
    console.log("next step")
    return recursiveFib(n - 1) + recursiveFib(n - 2);
};

console.log(recursiveFib(0)); // 0
console.log(recursiveFib(1)); // 1
console.log(recursiveFib(6)); // 8

// Time Complexity
// Big-O = O(2^n)