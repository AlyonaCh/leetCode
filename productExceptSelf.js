// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]

/**
 * @param {number[]} nums
 * @return {number[]}
 */
// var productExceptSelf = function(nums) {
//     // console.log(parseInt(1,10));
//     let arr = nums.slice();
//     let i = 0;
//     while (i < arr.length) {
//         let sum = 1;
//         let n = 0;
//         while (n < nums.length) {
//             if (n != i && nums[n] !== 1) {
//                 if (nums[n] === 0) {
//                     sum = 0;
//                     break;
//                 } else {
//                     sum = sum * nums[n];
//                 }
//             }
//             n++
//         }
//         arr[i] = sum;
//         i++
//     }
//     return arr
// };

var productExceptSelf = function(nums) {
    return nums.map(function(element, i) {
        let sum = 1;
        for (let n = 0; n < nums.length; n++) {
            if (n != i && nums[n] !== 1) {
                if (nums[n] === 0) {
                    sum = 0;
                    break;
                } else {
                    sum = sum * nums[n];
                }
            }
        }
        return sum;
    });
};


console.log(productExceptSelf([1,2,3,4]));
console.log(productExceptSelf([-1,1,0,-3,3]));
