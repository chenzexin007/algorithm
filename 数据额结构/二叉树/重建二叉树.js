// 给出前序遍历和中序遍历， 重建二叉树
// node数据结构
function treeNode(value){
  return {
    val: value,
    left: null,
    right: null
  }
}

function reBuildTree(pre, vin){
  if(pre.length === 0){ return }
  if(pre.length === 1){ return treeNode(pre[0]) }
  const rootVal  = pre[0]
  let node = treeNode(rootVal)
  const index = vin.findIndex(item => { return item == rootVal })
  const leftPre = pre.slice(1, index+1)
  const leftVin = vin.slice(0, index)
  const rightPre = pre.slice(index+1)
  const rightVin = vin.slice(index+1)
  node.left = reBuildTree(leftPre,leftVin)
  node.right = reBuildTree(rightPre, rightVin)
  return node
}