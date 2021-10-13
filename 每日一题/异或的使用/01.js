/**
 * 题目： 
 * 输入多个数， 其中有一个数出现奇数次，
 *              other  偶数次
 * 求： 这个数
 */
function yihuo(arr){
  let label = 0
  for(let i=0; i<=arr.length-1; i++){
    label ^= arr[i]
  }
  return label
}
