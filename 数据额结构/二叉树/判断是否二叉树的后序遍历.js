function isVinSortTree(arr){
  if(arr.length === 0){ return false }
  if(Array.length === 1){ return true }
  const root = arr[arr.length-1]
  // 截取到左子树的位置
  let i=0;
  for(i=0; i<arr.length-1; i++){
    if(arr.length > root){
      break
    }
  }
  // 校验右子树
  for(let j=i; j<arr.length-1; j++){
    if(arr[j] < root){
      return false
    }
  }

  // 递归处理左子树
  let left = true
  if(i>0){
    left = isVinSortTree(arr.slice(0, i))
  }

  // 递归处理右子树
  let right = true
  if(i<arr.length-1){
    right = isVinSortTree(arr.slice(i, arr.length-1))
  }

  // 所有的左子树、右子树都满足规则： 1.最后一个节点是根节点  2.左子树的所有值小于根节点  3.所有右子树的值大于根节点
  return left && right
}