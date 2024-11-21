/*
    Problem - Given a natural number 'n', determine if the number is prime or not
    A Prime number is a natural number greater than 1 that is not a product of two smaller natural numbers.
    
    isPrime(5) = true (1*5 or 5*1)
    isPrime(4) = false (1*4 or 2*2 or 4*1)
*/

function isPrime(n){
    if(n < 2){
        return false;
    };
    for (let i = 2; i < n; i++){
        if(n % i === 0){
            return false;
        };
    }; 
    return true;
};

console.log(isPrime(1)) //false
console.log(isPrime(5)) //true
console.log(isPrime(2)) //true
console.log(isPrime(4)) //false


// Time complexity is linear because there is one loop. Big-O = O(n)

/*
    Optimized Primalty Test
    Integers larger than the square root do not need to be checked, whenever 'n=a*b' one of the two factors 'a' and 'b' is less than or equal to the square root of 'n' 

    function isPrime(n){
    if(n < 2){
        return false;
    };
    for (let i = 2; i <= Math.sqrt(n); i++){
        if(n % i === 0){
            return false;
        };
    };
    return true;
};
This optimize solution has Big-O = O(sqrt(n))
*/