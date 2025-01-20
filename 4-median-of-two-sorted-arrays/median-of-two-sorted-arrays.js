/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let m = nums1.length;
	let n = nums2.length;

	let m1 = -1;
	let m2 = -1;

	let i = 0;
	let j = 0;

	for (let k = 0; k <= ((m+n)/2); k++) {
        m2 = m1;
        if (i < m && j < n) {
            m1 = nums1[i] > nums2[j] ? nums2[j++] : nums1[i++];
        } else if (i < m) {
            m1 = nums1[i++];
        } else {
            m1 = nums2[j++];
        }
    }

    if ((m + n) % 2 === 1) return m1;
    else return (m1 + m2) / 2;
};