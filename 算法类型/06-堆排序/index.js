/**
 * 堆排序： 主要先理解完全二叉树,
 *         记住三个公式： 父节点： (index-1)/2
 *                        左子节点： index*2+1
 *                        右子节点： index*2+2
 * 步骤： 1. heapInsert 先将输入的数组成大根堆
 *        2. 将堆的最后一个数与第一个数交换，断开最后一位的连接heapSize--，此时最大值已经确定，heapify重新先下比较形成大根堆
 */

function heapSort(arr){
  if(arr == null || arr.length <2){
    return
  }
  for(let i=0; i<arr.length; i++){
    // 形成大根堆
    heapInsert(arr,i)
  }
  /**
   * 如果是用户直接给所有数据，并且只需要得到大根堆
   * 那我们只需要使用heapify就行了，通过计算可以得到时间复杂度是o(N)
   *   for(let i=arr.length; i>0; i--){
        heapify(arr, i, arr.length)
      }
   */

  var heapSize = arr.length
  swap(arr, 0, --heapSize)
  while(heapSize > 0){
    heapify(arr, 0, heapSize)
    swap(arr, 0, --heapSize)
  }
} 

// 向上形成大根堆
function heapInsert(arr, index){
  // if(index == 0){
  //   return 
  // }
  while(arr[index] > arr[parseInt((index-1)/2)]){
    swap(arr, index, parseInt((index-1)/2))
    index = (index-1)/2
  }
}

// 向下形成大根堆
function heapify(arr, index, heapSize){
  var left = index*2 + 1
  while(left < heapSize){
    var target = left+1 < heapSize && arr[left+1] > arr[left] ? left+1 : left
    target = arr[index] > arr[target] ? index : target
    if(target == index){
      break
    }
    swap(arr, target, index)
    index = target
    left = index*2 + 1
  }
}