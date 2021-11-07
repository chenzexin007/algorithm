/**
 * 左右子树的深度差不超过 1；
 * 递归判断左右子树是否为 平衡二叉树
 * 使用左右子树差值比较， 验证该树是否为平衡二叉树
 */

function isBalanced(root){
  return balanced(root) != -1
}


function balanced(node){
  if(!node) return 0
  let left = balanced(node.left)
  let right = balanced(node.right)
  if(left === -1 || right === -1 || Math.abs(left-right)>1){
    return -1
  }
  return Math.max(left, right) + 1
}