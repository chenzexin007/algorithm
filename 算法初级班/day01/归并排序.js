/*
 * @Description: 
 * @Date: 2022-04-23 18:58:28
 * @LastEditors: 陈泽鑫
 * @LastEditTime: 2022-05-10 21:00:33
 * @FilePath: \algorithm\算法初级班\day01\归并排序.js
 */
// 时间复杂度： O(N*logN), 认识master公式， 因为外排比较了n次，所以d是1
// 归并排序： 递归 + 外排
// 这里需要说明，为什么 归并排序 比 冒泡、选择、插入等排序要快
// 因为： 归并排序 在外排（merge， 大范围合并小范围）的过程中，利用小范围存储了已经排好的内容，这样不用重复比对
//       冒泡、选择、插入等，每次都是重新比较，之前已经比较过的没有存储，所以发生了重复的比较

/**  master公式
 * T(N)= a*T(N/b)+ 0(N~d)
  1)log(b,a)>d-> 复杂度为0(N^log(b,a))
  2)log(b,a)=d->复杂度为0(N^d *logN)
  3)log(b,a)< d-> 复杂度为0(N^d)
 */
// eg 让 arr上 L到R上的数变得有序, 符合master公式 T(N) = aT(N/b) + O(N^d)
// a: 次数， 这里2次mergeSort
// b: 将每次数据分成同等的多少分之一， 这里是取中点，分成2份，所以是 2
// d: 其他计算的时间复杂度的次方，这里mergeProcess每次都是把arr的所以数n比较一次，所以是O(N^1), 所以d是 1
// log(b,a) = 1 = d 所以时间复杂度是   O(N*logN)

function mergeSort (arr, L, R) {
  if (L === R) return arr
  const M = L + ((R - L) >> 1)
  mergeSort(arr, L, M)
  mergeSort(arr, M + 1, R)
  mergeProcess(arr, L, M, R)
}

function mergeProcess (arr, L, M, R) {
  let help = []
  let p1 = L
  let p2 = M + 1
  while (p1 <= M && p2 <= R) {
    if (arr[p1] <= arr[p2]) {
      help.push(arr[p1])
      p1++
    } else {
      help.push(arr[p2])
      p2++
    }
  }
  while (p1 <= M) {
    help.push(arr[p1])
    p1++
  }
  while (p2 <= R) {
    help.push(arr[p2])
    p2++
  }
  arr.splice(L, R - L + 1, ...help)
}

// eg. 左边最小和 等价于 求 当前数 * 右边大于它的数的个数的累计合  
function sortProcess (arr, L, R) {
  if(L === R) {
    return 0   // 不同处
  }
  const M = L + ((R - L) >> 1)
  return sortProcess(arr, L, M)    // 左边数组的最小和
  + sortProcess(arr, M+1, R) // 右边数组的最小和
  + tomerge(arr, L, M, R) // 左右两边有序的数组，进行一次merge得到一个和
  // 3者相加才是最终结果
}

function tomerge(arr, L, M ,R) {
  let sum = 0   // 不同处
  let catchArr = []
  let i = 0
  let p1 = L
  let p2 = M+1
  while (p1 <= M && p2 <= R) {
    if (arr[p1] < arr[p2]) {
      // 当前数 * 右边大于它的数的个数
      sum += arr[p1] * (R - p2 + 1)
    }
    // 当 左右两边数相等时，需要先让右边数进入队列，因为这样才能直接使用右边的下标算出 大于当前数的个数
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


// 逆序对
function sortProcess03 (arr, L, R) {
  if (L === R) return 0
  let m = L + ((R - L) >> 1)
  return sortProcess03(arr, L, m) + sortProcess03(arr, m + 1, R) + merge03(arr, L, m, R)
}

function merge03 (arr, L, M, R) {
  let total = 0
  let help = []
  let p1 = L
  let p2 = M + 1
  while (p1 <= M && p2 <= R) {
    if (arr[p1] > arr[p2]) {
      total += R - p2 + 1
      help.push(arr[p1])
      p1++
    } else {
      help.push(arr[p2])
      p2++
    }
  }
  while (p1 <= M) {
    help.push(arr[p1])
    p1++
  }
  while (p2 <= R) {
    help.push(arr[p2])
    p2++
  }
  arr.splice(L, R - L + 1, ...help)
  return total
}