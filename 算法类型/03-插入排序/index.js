// 时间复杂度： O(N) ~ O(N²), 我们认为是O(N²) eg. 1234567 和 7654321
// 空间复杂度： O(1), 本题实现没有创建变量，所以是0
function insertSort(arr){
  for(let i=1; i<arr.length; i++){
    for(let j=i-1; arr[j]>arr[j+1] && j>=0; j--){
      arr[j] = arr[j] ^ arr[j+1]
      arr[j+1] = arr[j] ^ arr[j+1]
      arr[j] = arr[j] ^ arr[j+1]
    }
  }
  return arr
}