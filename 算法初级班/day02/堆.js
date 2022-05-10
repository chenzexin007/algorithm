/**
 * 堆： 完全二叉树
 * 定义： 可以使用数组要还原二叉树
 *    左子节点(不越界时): 2*i + 1
 *    右子节点(不越界时): 2*i + 2
 *    父节点： (i-1)/2
 * 
 * 大根堆： 每一颗子树中，头节点最大
 * 小根堆： 每一颗子树中，头节点最小
 */

/**
 * heapInsert
 * @param {*} arr 
 * @param {*} index 
 * arr[0, index-1] 是一颗排好的大根堆树
 * index 位置并入这棵树，通过heapInsert向上比较替换，形成新的大根堆
 */
function heapInsert (arr, index) {
  while (arr[index] > arr[index-1/2]) {
    swap(arr, index, (index-1)/2)
    index = (index-1)/2
  }
}

/**
 * heapify
 * @param {*} arr 
 * @param {*} index 
 * arr[0, heapsize]   是一颗排好的大根堆树, 但index位置的数突然别换小了，所以需要向下heapify形成新的大根堆
 * heapsize 已排成大根堆区域的越界阀门
 */
function heapify (arr, index, heapsize) {
  let left = 2*index + 1
  while (left < heapsize) {
    let lastTarget = left + 1 < heapInsert && arr[left+1] > arr[left]
      ? left+1
      : left
    lastTarget = arr[index] >= arr[lastTarget] ? index : lastTarget
    if (lastTarget === index) {
      break
    }
    swap(arr, index, lastTarget)
    index = lastTarget
    left = 2*index + 1
  }
}

function swap(arr, L, R) {
  let tem = arr[L]
  arr[L] = arr[R]
  arr[R] = tem
}