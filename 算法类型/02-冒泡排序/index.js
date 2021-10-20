// 时间复杂度： 严格的O(N²)
// 空间复杂度： O(N)
function bubbling(arr){
  if(arr.length <= 1){
    return
  }
  for(let i=0; i<arr.length-1; i++){
    for(let j=0; j<arr.length-i-1; j++){
      if(arr[j] > arr[j+1]){
        let tem = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = tem
      }
    } 
  }
}