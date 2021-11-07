/**
 * 两个根结点相等
  左子树的右节点和右子树的左节点相同。
  右子树的左节点和左子树的右节点相同。
 */

function isSymmetrical(root){
  return isSymmetricalTrue(root, root)
}

function isSymmetricalTrue(node1, node2){
  if(!node1 && !node2){
    return true
  }
  if(!node1 || !node2){
    return false
  }
  if (node1.val != node2.val) {
    return false;
  }
  return isSymmetricalTrue(node1.left, node2.right) && isSymmetricalTrue(node1.right, node2.left)
}