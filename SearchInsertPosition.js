// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the 
// index where it would be if it were inserted in order.
// You must write an algorithm with O(log n) runtime complexity.
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let min = 0;
    let max = Math.floor(nums.length);
    let check = Math.floor((min + max) / 2);
    while(check <= nums.length && check >= 0){
        if (nums[check] == target || (nums[check-1] < target && nums[check] > target)) {
            return check;
        }
        if(nums[check+1] > target && nums[check] < target){
            return ++check;
        }
        if(nums[check] < target){
            if (check == nums.length-1) {
                return ++check; 
            }
            min = check + 1;
        }else{
            if (check == 0) {
                return check; 
            }
            max = check - 1;
        }
        check = Math.floor((min + max) / 2);
    }
};

console.log(search([1], 0));