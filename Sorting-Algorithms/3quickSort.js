/*
    Quick sort idea
    # Identify the pivot element in the array
    -- Pick first element as pivot
    -- Pick last element as pivot (Our aapproach)
    -- Pick a random element as pivot
    -- Pick median as pivot

    # Put everything that's smaller than the pivot into a 'left' array and everything that's greater than the pivot into a 'right' array.
    # Repeat the process for the individual 'left' and 'right' arrays till you have an array of length 1.
    # Repeatedly concatenate the left array, pivot and right array till one sorted arrat remains.   

*/
function quickSort(arr) {
    if (arr.length < 2) {
        return arr;
    }
    let pivot = arr[arr.length - 1];
    let left = [], right = []; 
    for (let i = 0; i < arr.length - 1; i++) {
        (arr[i] < pivot) ? left.push(arr[i]) : right.push(arr[i]);
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
}

const arr = [8, 20, -3, 4, -6];
console.log(quickSort(arr)); // [-6, -3, 4, 8, 20]

// Worst case -- O(n^2)
// Avg Case -- O(nlogn)
