/*
    Power Of Two
    Problem - Given a positive integer 'n', determine if the number is a power of 2 or not
    An integer is a power of two if there exists an integer 'x' such that 'n' === 2*
    
    isPowerOfTwo(1) = true(2^0)
    isPowerOfTwo(2) = true(2^1)
    isPowerOfTwo(5) = false

    Power of two - Pseudocode
    n = 8
    8/2 = 4(remainder 0)
    4/2 = 2(remainder 0)
    2/2 = 1(remainder 0)

    if remainder is not 0 in any step, 'n' is not a power of two
    if remainder is 0 and 'n' comes down to 1 eventually, n is a power of two.
*/

function isPowerOfTwo(n){
    if(n < 1){
        return false;
    }
    while(n > 1){
        if (n % 2 !== 0){
            return false
        }
        n = n / 2
    }
    return true;
};

console.log(isPowerOfTwo(1)) // true
console.log(isPowerOfTwo(2)) // true
console.log(isPowerOfTwo(5)) // false
 
// Time Complexity is Big-O = O(logn) -- Because the input size is being reduced on every iteration 

/*
    A linear solution



*/
function isPowerOfTwoBitwise(n){
    if (n < 1){
        return false
    }
    return (n & (n-1)) === 0
}
// Big-O = O(1)