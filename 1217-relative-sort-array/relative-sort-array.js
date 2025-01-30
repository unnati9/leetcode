/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    let m = arr1.length
  let n = arr2.length
  let position = new Map()
  for (let i = 0; i < n; i++) {
    position.set(arr2[i], i)
  }

  let maxVal = arr2[0]
  for (let i = 1; i < n; i++) {
    if (arr2[i] > maxVal) maxVal = arr2[i]
  }
  let count = new Array(maxVal + 1).fill(0)
  let remainingArray = []
  for (let i = 0; i < m; i++) {
    let index = position.get(arr1[i])
    console.log(index)
    if (index > -1) count[index]++
    else remainingArray.push(arr1[i])
  }
  for (let i = 1; i < maxVal; i++) {
    count[i] += count[i - 1]
  }
  console.log(count)
  let result = new Array(n)
  for (let i = m - 1; i >= 0; i--) {i
    if (position.has(arr1[i])) {
      let num = arr1[i]
      result[count[position.get(num)] - 1] = num
      count[position.get(num)]--
    }
  }
  remainingArray.sort((a, b) => a - b)
  result.push(...remainingArray)
  return result
};