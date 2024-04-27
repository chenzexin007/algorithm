/*
 * @Description: 
 * @Date: 2022-04-22 23:10:07
 * @LastEditors: 陈泽鑫
 * @LastEditTime: 2022-04-23 19:59:08
 * @FilePath: \algorithm\算法初级班\day01\选择排序.js
 */
// 时间复杂度： O(N^2)
function sortProcess (arr) {
  if (arr.length <= 1) return arr
  for (let i=0; i<arr.length-1; i++) { // 只要比n-1次就出结果
    let minIndex = i
    for(let j=i+1; j<arr.length; j++){
      minIndex = arr[minIndex] < arr[j] ? minIndex : j
    }
    if (minIndex !== i) {
      let tem = arr[i]
      arr[i] = arr[minIndex]
      arr[minIndex] = tem
    }
  }
}
