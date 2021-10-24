/**
 * [1,4,3,5,7,2]
 *  求小和
 */

function getSmall(arr){
  if(arr == null || arr.length < 2){
    return 0
  }
  return process(arr, 0, arr.length-1)
}

function process(arr, L, R){
  if(L == R){
    return 0
  }
  var M = L + ((R-L)>>1)
  return process(arr, L, M) + process(arr, M+1, R) + toMerge(arr, L, M, R)
}

function toMerge(arr, L, M, R){
  var catchArr = []
  var add = 0
  var i = 0;
  var p1 = L
  var p2 = M+1
  while(p1 <= M && p2 <= R){
    add += arr[p1] < arr[p2] ? (R-p2+1)*arr[p1] : 0
    catchArr[i++] = arr[p1] < arr[p2] ? arr[p1++] : arr[p2++]
  }

  while(p1 <= M){
    catchArr[i++] = arr[p1++]
  }

  while(p2 <= R){
    catchArr[i++] = arr[p2++]
  }

  for(let j=0; j<catchArr.length; j++){
    arr[L+j] = catchArr[j]
  }
  return add
}
