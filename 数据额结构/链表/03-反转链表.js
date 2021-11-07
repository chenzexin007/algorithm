/**
 * 1. 将heade指向下一个， 进入下一个用于循环
 * 2. 将currentNode.next指向headNode，将当前项插入到最前端
 * 3. 将headNode直接指向currentNode， 改变第一项的指向
 */

function reverseList(head){
  let headeNode = head
  let currentNode = null
  while(head && head.next){
    currentNode = head.next
    headeNode.next = currentNode.next
    currentNode.next = headeNode
    headeNode = currentNode
  }
  return currentNode
}