/*
 * @Description: 
 * @Date: 2022-04-23 21:39:24
 * @LastEditors: 陈泽鑫
 * @LastEditTime: 2022-04-23 22:43:53
 * @FilePath: \algorithm\算法初级班\day02\快速排序.js
 */
/**
 * 普通快排原理 O(N^2)：       已数组最后一项作为num， 小于等于num的在左边， 大于的在右边
 *              一次下来后，把num放中间，再分别对左边和右边进行同等逻排序(递归)
 *              也就是说一次partiction只排好一个数
 * 
 * 存在问题：    其实可以把逻辑改为：
 *              小于num的在左边， 等于的在中间， 大于的在右边
 *              一次下来后，再分别对左边和右边进行同等逻排序(递归)
 * 荷兰国旗处理快排优化：        中间的等于部分其实是已经排好，所以不用再排
 *              也就是说一次partiction只排好一组 等于num的数
 * 
 * 随机快排 O(N*logN)： 随机去取一个数与最后一个数做交换， 然后进行   荷兰国旗处理快排优化
 *                     这样数据量很大的时候，左右两边的数的长度，就是一个概率性问题，长期期望算出来最后时间
 *                     复杂度就是O(N*logN)
 */


// 荷兰国旗处理快排优化
function sortProcess (arr, L, R) {
  if (L < R) {
    // 加上这句就是随机快排
    // swap(arr, L + Math.floor(Math.random() * (R-L+1)), R)
    const p = partiction(arr, L, R)
    sortProcess(arr, L, p[0]-1)
    sortProcess(arr, p[1]+1, R)
  }
}

function partiction (arr, L, R) {
  let less = L - 1
  let more = R
  while (L < more) {
    if(arr[L] < arr[R]) {
      swap(arr, ++less, L++)
    } else if (arr[L] > arr[R]) {
      swap(arr, L, --more)
    } else {
      L++
    }
  }
  swap(arr, more, R)
  return [less+1, more]
}

function swap (arr, L, R) {
  let tem = arr[L]
  arr[L] = arr[R]
  arr[R] = tem
}