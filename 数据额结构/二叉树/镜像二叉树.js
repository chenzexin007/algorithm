// 生成原二叉树的 镜像二叉树
// 及： 把所有节点的左右节点交换
function Mirror(root){
  if(root){
    const temp = root.left
    root.left = root.right
    root.right = temp
    Mirror(root.left)
    Mirror(root.right)
  }
}