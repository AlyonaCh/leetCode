<?php

// Given an integer array nums, return the third distinct maximum number in this array. If the third maximum does not exist, return the maximum number.

// Input: nums = [3,2,1]
// Output: 1
// Explanation:
// The first distinct maximum is 3.
// The second distinct maximum is 2.
// The third distinct maximum is 1.

class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function thirdMax($nums) {
        $nums = array_unique($nums);
        rsort($nums);
        $point = 3;
        if (count($nums) >= $point) {
            return $nums[$point-1];
        } else {
            return $nums[0];
        }
    }
}