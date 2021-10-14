/**
 * 题目秒速： 有一组数，其他数都出现偶数次，两种数出现奇数次，求这两个数
 */
function yihuo02(arr){
  let eor = 0
  for(let i=0; i<arr.length-1; i++){
    eor ^= arr[i]  // 得到 eor = a^b, 因为a不等于b，所以eor至少有1位是1
  }
  let rightOne = eor & (~eor + 1)  // 得到最右侧的1
  console.log(rightOne)
  let onlyOne = 0
  for(let j=0; j<arr.length-1; j++){
    console.log('22',rightOne, rightOne & arr[j], j)
    if((rightOne & arr[j]) == 0){
      console.log('11', arr[j])
      onlyOne ^= arr[j]     //得到其中一个数 a或者b
    } 
  }
  console.log(onlyOne, onlyOne^eor)  // onlyOne^eor = onlyOne^a^b = a^a^b || b^a^b
}