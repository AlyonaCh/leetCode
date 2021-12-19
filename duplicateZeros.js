// Given a fixed-length integer array arr, duplicate each occurrence of zero, shifting the remaining elements to the right.

// Note that elements beyond the length of the original array are not written. Do the above modifications to the input array in place and do not return anything.
// Input: arr = [1,0,2,3,0,4,5,0]
// Output: [1,0,0,2,3,0,0,4]
// Explanation: After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4]
/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
 var duplicateZeros = function(arr) {
    let val = null;
    arr.forEach(function(item, i) {
        if (item === 0 && i != val) {
            arr.pop()
            arr.splice(i + 1, 0, 0)
            val = i + 1;
        }
    });
};
duplicateZeros([1,0,2,3,0,4,5,0])