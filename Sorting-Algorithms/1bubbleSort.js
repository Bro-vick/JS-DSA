/*
    Problem - Given an array of integers, sort the array.
    const arr = [8, 20, -2, 4, -6]
    bubbleSort(arr) => Should return [-6, -2, 4, 8, 20]

    Bubble sort is one of the least effecient sorting algorithms and rarely used.

    The Idea...
    # Compare adjacent elements in the array and swap the positions if they are not in the intended order.
    # Repeat the instruction as you step through each element in the array.
    # Once you step through the whole array with no swaps, the array is sorted. 
*/

function bubbleSort(arr){
    let swapped
    do {
        swapped = false;
        for(let i = 0; i < arr.length - 1; i++){
            if(arr[i] > arr[i + 1]){
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    } while(swapped);
}

// Big-O = O(n^2)

const arr = [8, 20, -2, 4, -6];
bubbleSort(arr);
console.log(arr); // [-6, -2, 4, 8, 20]