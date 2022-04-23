/*
 * @Description: 
 * @Date: 2022-04-23 18:58:28
 * @LastEditors: 陈泽鑫
 * @LastEditTime: 2022-04-23 20:12:17
 * @FilePath: \algorithm\算法初级班\day01\归并排序.js
 */
// 时间复杂度： O(N*logN), 认识master公式， 因为外排比较了n次，所以d是1
// 归并排序： 递归 + 外排
// 这里需要说明，为什么 归并排序 比 冒泡、选择、插入等排序要快
// 因为： 归并排序 在外排（merge， 大范围合并小范围）的过程中，利用小范围存储了已经排好的内容，这样不用重复比对
//       冒泡、选择、插入等，每次都是重新比较，之前已经比较过的没有存储，所以发生了重复的比较
// function sortProcess (arr, L, R) {
//   if(L === R) {
//     return
//   }
//   1）L+R 可能溢出；2）L + (R-L)/2  防止溢出； 3）L + ((R - L) >> 1), 防溢出+更快：位运算比算式运算更快
//   const M = L + ((R - L) >> 1)
//   sortProcess(arr, L, M)
//   sortProcess(arr, M+1, R)
//   tomerge(arr, L, M, R)
// }

// function tomerge(arr, L, M ,R) {
//   let catchArr = []
//   let i = 0
//   let p1 = L
//   let p2 = M+1
//   while (p1 <= M && p2 <= R) {
//     catchArr[i++] = arr[p1] > arr[p2] ? arr[p2++] : arr[p1++]
//   }
//   while (p1 <= M) {
//     catchArr[i++] = arr[p1++]
//   }
//   while (p2 <= R) {
//     catchArr[i++] = arr[p2++]
//   }
//   for(let j=0; j<catchArr.length; j++) {
//     arr[L+j] = catchArr[j]
//   }
// }

// eg. 最小和： 
function sortProcess (arr, L, R) {
  if(L === R) {
    return 0   // 不同处
  }
  const M = L + ((R - L) >> 1)
  return sortProcess(arr, L, M)    // 不同处
  + sortProcess(arr, M+1, R)
  + tomerge(arr, L, M, R)
}

function tomerge(arr, L, M ,R) {
  let sum = 0   // 不同处
  let catchArr = []
  let i = 0
  let p1 = L
  let p2 = M+1
  while (p1 <= M && p2 <= R) {
    if (arr[p1] < arr[p2]) {     // 不同处
      sum += arr[p1] * (R - p2 + 1)
    }
    catchArr[i++] = arr[p1] < arr[p2] ? arr[p1++] : arr[p2++]
  }
  while (p1 <= M) {
    catchArr[i++] = arr[p1++]
  }
  while (p2 <= R) {
    catchArr[i++] = arr[p2++]
  }
  for(let j=0; j<catchArr.length; j++) {
    arr[L+j] = catchArr[j]
  }
  return sum   // 不同处
}