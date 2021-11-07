// 中序遍历: 左中右， 所以中序遍历就是从小到大排好序的
function getKVale(node, k){
  let arr = []
  toMinTree(node, arr)
  if(k>0 && k<arr.length){
    return arr[k-1]
  }else {
    return null
  }
}

function toMinTree(node, arr){
  if(node === null){ return }
  toMinTree(node.legt, arr)
  arr.push(node.val)
  toMinTree(node.right, arr)
}