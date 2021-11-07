/**
 * 1. 左右子树都不为空： 左右子树的最小深度 + 1
 * 2. 左子树为空： 右子树的最小深度 + 1
 * 3. 右子树为空： 左子树的最小深度 + 1
 */

function minDeepTree(root){
  if(!root){
    return 0
  }
  if(!root.left){
    return minDeepTree(root.right) + 1
  }
  if(!root.right){
    return minDeepTree(root.left) + 1
  }

  return Math.min( minDeepTree(root.left), minDeepTree(root.right) ) + 1
}