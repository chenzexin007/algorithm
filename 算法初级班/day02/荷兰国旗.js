/*
 * @Description: 
 * @Date: 2022-04-23 21:16:21
 * @LastEditors: 陈泽鑫
 * @LastEditTime: 2022-04-23 21:41:52
 * @FilePath: \algorithm\算法初级班\day02\荷兰国旗.js
 */

// 荷兰国旗是给一个 num， arr， arr中小于num的在左边， 等于的在中间， 大于的在右边
// 作用： 用于优化经典快速排序， 原理： 中间部分已经排好序，不需要重复排
function sortProcess(arr, num) {
  if (arr.length <= 1) return
  let less = -1
  let more = arr.length
  let cur = 0
  while (cur < more) {
    if (arr[cur] < num) {
      swap(arr, ++less, cur++)
    } else if (arr[cur] > num) {
      swap(arr, --more, cur)
    } else {
      cur++
    }
  }
  return arr
}

function swap(arr, L, R) {
  let tem = arr[L]
  arr[L] = arr[R]
  arr[R] = tem
}