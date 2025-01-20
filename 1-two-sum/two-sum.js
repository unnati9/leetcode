/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let hash = new Map();
    for (let i = 0; i < nums.length; i++) {
        let requiredNum = target - nums[i];
        if (hash.get(requiredNum) > -1) return [hash.get(requiredNum), i];
        hash.set(nums[i], i);
    }
    return [];
};