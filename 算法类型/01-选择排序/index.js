function selectSort(arr){
  if(arr.length <= 1){
    return
  }
  for(let i=0; i<arr.length-1; i++){
    let minIndex = i
    for(let j=i+1; j<arr.length; j++){
      minIndex = arr[minIndex] > arr[j] ? j : minIndex
    }
    // 交换
    minIndex != i && swap(arr, i, minIndex)
  }
}

function swap(arr, i, minIndex){
  let temp = arr[i]
  arr[i] = arr[minIndex]
  arr[minIndex] = temp
}
