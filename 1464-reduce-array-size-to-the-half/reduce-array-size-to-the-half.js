/**
 * @param {number[]} arr
 * @return {number}
 */
var minSetSize = function(arr) {
    let n = arr.length;
    let count = new Array(n+1).fill().map(() => new Array());
    let freq = {};
    for (let i = 0; i  < n; i++) {
        freq[arr[i]] = (freq[arr[i]] || 0) + 1;
    }
    for (let num in freq) {
        count[freq[num]].push(num);
    }
    let resultSet = [];
    let totalSize = 0;
    for (let i = n; i >= 0; i--) {
        if (totalSize >= Math.floor(n/2)) break;
        for (let j = 0; j < count[i].length; j++) {
            resultSet.push(count[i][j]);
            totalSize += freq[count[i][j]];
            if (totalSize >= Math.floor(n/2)) break;
        }
    }
    return resultSet.length;
};