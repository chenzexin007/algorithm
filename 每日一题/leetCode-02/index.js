/**
 * 给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。

  请你将两个数相加，并以相同形式返回一个表示和的链表。

  你可以假设除了数字 0 之外，这两个数都不会以 0 开头。

  2 -> 4 -> 7
  1 -> 7 -> 1
  3 -> 1 -> 9
 */

  // 提供工具
function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

function addTwoNumbers(l1, l2){
  let result = new ListNode()
  let cur = result
  let next = 0
  while(l1 != null && l2 != null){
    let total = l1.val + l2.val + next
    cur.next = new ListNode(total%10) 
    next = parstInt(total/10)
    cur = cur.next
  }
  while(l1 != null){
    let total = l1.val + next
    cur.next = new ListNode(total%10) 
    next = parstInt(total/10)
    cur = cur.next
  }
  while(l2 != null){
    let total = l2.val + next
    cur.next = new ListNode(total%10) 
    next = parstInt(total/10)
    cur = cur.next
  }
  if(next != 0){
    cur.next = new ListNode(next) 
  }
  return result.next
}