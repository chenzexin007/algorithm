/*
 * @Description: 
 * @Date: 2022-04-22 22:44:59
 * @LastEditors: 陈泽鑫
 * @LastEditTime: 2022-04-22 23:09:30
 * @FilePath: \algorithm\算法初级班\day01\冒泡排序.js
 */
function sortProcess (arr) {
  if (arr.length <= 1) return arr
  for (let i=0; i<arr.length-1; i++) {
    for (let j=0; j<arr.length-i-1; j++) {
      if (arr[j] > arr[j+1]){
        let tem = arr[j]; 
        arr[j] = arr[j+1];
        arr[j+1] = tem;
      }
    }
  }
  return arr
}
