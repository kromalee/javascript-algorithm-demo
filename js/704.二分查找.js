/*
 * @lc app=leetcode.cn id=704 lang=javascript
 *
 * [704] 二分查找
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    var left = 0;
    var right = nums.length - 1
    while (left <= right) {
        var mid = left + Math.floor((right - left) / 2)
        if (nums[mid] === target) {
            return mid
        }
        else if (nums[mid] > target) {
            right = mid - 1
        }
        else if (nums[mid] < target) {
            left = mid + 1
        }
    }
    return -1

};
// @lc code=end
console.log(search([-1, 0, 3, 5, 9, 12], 9))

