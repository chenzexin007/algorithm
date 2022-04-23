/*
 * @Description: 
 * @Date: 2022-04-23 19:50:34
 * @LastEditors: 陈泽鑫
 * @LastEditTime: 2022-04-23 19:58:59
 * @FilePath: \algorithm\算法初级班\day01\插入排序.js
 */
// 时间复杂度： O(N^2)
function sortProcess (arr) {
  if(arr.length <= 1) {
    return
  }
  for (let i=1; i<arr.length; i++) {
    for (let j=i+1; j>0 && arr[j]<arr[j-1]; j--) {
      let tem = arr[j]
      arr[j] = arr[j-1]
      arr[j-1] = tem
    }
  }
}    