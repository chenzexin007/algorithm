/*
 * @Description: 
 * @Date: 2022-04-23 19:50:34
 * @LastEditors: 陈泽鑫
 * @LastEditTime: 2022-04-23 19:58:59
 * @FilePath: \algorithm\算法初级班\day01\插入排序.js
 */
// 时间复杂度受实际数据影响（最理想的数据[1,2,3],此时的时间复杂度是O(N)），此时它是优于选择排和冒泡排序的
// 时间复杂度： O(N^2) 

function sortProcess02 (arr) {
  if (arr.length <= 1) return arr
  for (let i = 1; i < arr.length; i++) { // 0 ~ i上变得有序
    // 这里把arr[j] < arr[j - 1]放在判断进入循环的条件中，可以避免进入循环
    // 因为插入排序，每一次都会把前面的数变成 有序。所以下次如果和最后一个比较就能确定位置的，就没有必要继续向下循环了
    // 最理想的数据[1,2,3],此时的时间复杂度是O(N)
    for (let j = i; j > 0 && arr[j] < arr[j - 1]; j--) {
      let min = arr[j - 1]
      arr[j - 1] = arr[j]
      arr[j] = min
    }
  }
  return arr
}