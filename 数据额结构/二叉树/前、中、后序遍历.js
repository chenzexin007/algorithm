// 前序遍历：  中左右
// 中序遍历：  左中右
// 后序遍历：  左右中
// 数据结构: node: { val: xxx, left: node, right: right }

var root = {
  val: 1,
  left: { val: 2 },
  right: { val:3 }
}

// 前序遍历
function preNode(root, arr=[]){
  if(root == null){ return };
  arr.push(root.val);
  preNode(root.left, arr)
  preNode(root.right, arr)
  return arr
}

// 中序遍历
function minNode(root, arr=[]){
  if(root == null)  return
  minNode(root.left, arr)
  arr.push(root.val)
  minNode(root.right, arr)
  return arr
}

// 后序遍历
function vinNode(root, arr=[]){
  if(root == null)  return
  vinNode(root.left, arr)
  vinNode(root.right, arr)
  arr.push(root.val)
  return arr
}
