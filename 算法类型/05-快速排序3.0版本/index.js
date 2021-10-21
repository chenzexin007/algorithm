/**
 * 3.0版本与之前不同的是： 我们取的这个比较值，是我们随机产生的对应位置的值和最后一个做交换，并以它作为比较值  +  荷兰国旗问题
 */

function quickSort(arr, L, R){
  if(L < R){
    // 随机交换, 这个是3.0版本不一样的地方\
    swap(arr, L+parseInt(Math.random()*(R-L+1)), R)
    // 生成左右零界点
    var p = partition(arr, L, R)
    // 递归左边 和 右边
    quickSort(arr, L, p[0]-1)
    quickSort(arr, p[1]+1, R)
  }
}

// 两数做交换
function swap(arr, L, R){
  var temp = arr[L]
  arr[L] = arr[R]
  arr[R] = temp
}

// 荷兰国旗
function partition(arr, L, R){
  var less = L-1
  var more = R
  while(L<more){
    if(arr[L] < arr[R]){
      swap(arr, ++less, L++)
    }else if(arr[L] > arr[R]){
      swap(arr, --more, L)
    }else{
      L++
    }
  }
  swap(arr, more, R)
  return [ ++less, more ]
}