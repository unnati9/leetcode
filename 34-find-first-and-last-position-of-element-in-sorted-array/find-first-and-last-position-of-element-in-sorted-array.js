/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let lowerBound = 0;
    let upperBound = nums.length - 1;

    let currentIndex = -1;
    while (lowerBound <= upperBound) {
        let mid = Math.floor((lowerBound + upperBound) / 2);
        if (nums[mid] === target) {
            currentIndex = mid;
            break;
        } else if (target < nums[mid]) {
            upperBound = mid - 1;
        } else {
            lowerBound = mid + 1;
        }
    }

    if (currentIndex === -1) return [-1, -1];
    let i = currentIndex - 1;
    let res = [];
    while (i >= 0) {
        if (nums[i] === target) i--;
        else break;
    }
    res.push(i+1);
    while (currentIndex <= nums.length) {
        if (nums[currentIndex] === target) currentIndex++;
        else break;
    }
    res.push(currentIndex-1);
    return res;
};