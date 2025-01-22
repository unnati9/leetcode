/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let n = nums.length;
    let hash = new Map();
    for (let i = 0; i < n; i++) {
        if (hash.get(nums[i])) return true;
        hash.set(nums[i], 1);
    }
    return false;
};