/**
 * 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。

  你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。

  你可以按任意顺序返回答案

  输入：nums = [2,7,11,15], target = 9
  输出：[0,1]
  解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
 */
function twoSum(nums, target){
  // 使用枚举哈希表，当数组中不出现同样的元素时适用
  let obj = {}
  // for(let i=0; i<nums.length; i++){
  //   obj[nums[i]] = i
  // }
  // for(let j in obj){
  //   let dif = target - j
  //   if(obj[dif] != undefined && obj[dif] != obj[j]){
  //     return [ obj[dif], obj[j] ]
  //   }
  // }
  // return []

  // 使用暴力法
  for(let i=0; i<nums.length-1; i++){
    for(let j=i+1; j<nums.length; j++){
      if(nums[i] + nums[j] == target){
        return [ i, j ]
      }
    }
  }
  return []
}