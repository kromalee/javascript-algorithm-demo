/*
 * @lc app=leetcode.cn id=167 lang=javascript
 *
 * [167] 两数之和 II - 输入有序数组
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    var left = 0
    var right = numbers.length - 1
    while (left < right) {
        var sum = numbers[left] + numbers[right]
        if (sum === target) {
            return [left + 1, right + 1]
        }
        else if (sum > target) {
            right--
        }
        else {
            left++
        }
    }
};
// @lc code=end

