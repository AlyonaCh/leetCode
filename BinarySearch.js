/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let min = 0;
    let max = Math.floor(nums.length-1);
    let check = 0;
    while(min <= max){
        check = Math.floor((min + max) / 2);
        if (nums[check] == target) {
            return check;
        }
        if(nums[check] < target){
            min = check + 1;
        }else{
            max = check - 1;
        }
    }
    return -1;
};

console.log(search([-1,0,3,5,9,12], 2));