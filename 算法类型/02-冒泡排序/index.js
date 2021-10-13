function bubbling(arr){
  if(arr.length <= 1){
    return
  }
  for(let i=0; i<arr.length-1; i++){
    for(let j=0; j<arr.length-i; j++){
      if(arr[j] > arr[j+1]){
        let tem = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = tem
      }
    } 
  }
}