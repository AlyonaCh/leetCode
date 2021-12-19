// Given an integer array nums, move all the even integers at the beginning of the array followed by all the odd integers.

// Return any array that satisfies this condition.

// Input: nums = [3,1,2,4]
// Output: [2,4,3,1]
// Explanation: The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.

/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortArrayByParity = function(nums) {
    let even = [];
    let odd = [];
    nums.forEach(element => {
        element % 2 > 0 ? odd.push(element) : even.push(element);
    });
    return even.concat(odd);
};

console.log(sortArrayByParity([3,1,2,4]))