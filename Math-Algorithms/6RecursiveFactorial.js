function recursiveFact(n){
    if(n === 0){
        return 1
    };
    return n * recursiveFact(n - 1)
};

console.log(recursiveFact(0)) // 1
console.log(recursiveFact(1)) // 1
console.log(recursiveFact(5)) // 120

// Big-O = O(n) - Linear