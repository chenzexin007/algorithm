/**
 * 二叉树的最大深度： 左子树和右子树的最大深度 + 1
 */

function deepTree(root){
  return !root ? 0 : Math.max(deepTree(root.left, root.right)) + 1
}