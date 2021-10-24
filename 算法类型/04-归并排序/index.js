/**
 * 给出一个数组，将R -> L位置上的数排好序  
 * 归并排序
 * 原理： 分治法将问题分(divide)成一些小的问题然后递归求解，而治(conquer)的阶段则将分的阶段得到的各答案"修补"在一起，即分而治之 
 * 时间复杂度: o(N*logN), 比选择排序、冒泡排序、插入排序这些o(N^2)好的原因，是它保存了之前的比较记录
 * 计算递归时间复杂度的公式：
 *  master公式： T(N) = aT(N/B) + o(N^b)
 *  log(b,a)  > d   o(N^log(b,a))
 *  log(b,a)  = d   o(N^b * logN)
 *  log(b,a)  < d   o(N^b)
 */

function process(arr, L, R){
  if(L == R){
    return
  }
  const M = L + ((R-L)>>1)
  // 分
  process(arr, L, M)
  process(arr, M+1, R)
  // 治, 这里 M到L   M到R的顺序已经排好，开始合并
  toMerge(arr, L, M, R)
}

function toMerge(arr, L, M, R){
  var catchArr = []
  var i = 0
  var p1 = L
  var p2 = M+1
  while(p1 <= M && p2 <= R){
    catchArr[i++] = arr[p1] <= arr[p2] ? arr[p1++] : arr[p2++]
  }
  if(p1 <= M){
    catchArr.push(...arr.slice(p1, M+1))
  }
  if(p2 <= R){
    catchArr.push(...arr.slice(p2, R+1))
  }
  // while(p1 <= M){
  //   catchArr[i++] = arr[p1++]
  // }
  // while(p2 <= R){
  //   catchArr[i++] = arr[p2++]
  // }
  for(let j=0; j<catchArr.length; j++){
    arr[L+j] = catchArr[j]
  }
}
