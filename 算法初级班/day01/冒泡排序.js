/*
 * @Description: 
 * @Date: 2022-04-22 22:44:59
 * @LastEditors: 陈泽鑫
 * @LastEditTime: 2022-04-23 21:41:40
 * @FilePath: \algorithm\算法初级班\day01\冒泡排序.js
 */
// 时间复杂度： O(N^2)

function sortProcess02 (arr) {
  if (arr.length <= 1) return arr
  let len = arr.length
  for (let i = len - 1; i > 0; i--) {
    for (let j = 0; j < i; j ++) {
      if (arr[j] > arr[j + 1]) {
        let min = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = min
      }
    }
  }
  return arr
}
