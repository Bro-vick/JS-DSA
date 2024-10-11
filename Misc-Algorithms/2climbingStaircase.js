/*
    Climbing Stair Case Idea
    # At any given time, you can climb either 1 or 2 steps
    # If you have to climb to step 'n', we can only climb from step 'n-1' or 'n-2'
    # Calculate the ways we can climb to 'n-1' and 'n-2' steps and add the two.
    climbingStaircase(n) = climbingStaircase(n-1) + climbingStaircase(n-2)

*/

function climbingStaircase(n){
    const ways = [1, 2];
    for(let i = 2; i <= n; i++){
        ways[i] = ways[i - 1] + ways[i - 2];
    };
    return ways[n - 1];
};

console.log(climbingStaircase(1));
console.log(climbingStaircase(2));
console.log(climbingStaircase(3));
console.log(climbingStaircase(4));
console.log(climbingStaircase(5));
console.log(climbingStaircase(6));

// Big-O = O(n)