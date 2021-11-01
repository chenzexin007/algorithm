/**
 * 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 
 * 输入：l1 = [1,2,4], l2 = [1,3,4]
  输出：[1,1,2,3,4,4]
 */

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

var mergeTwoLists = function(l1, l2) {
  let result = new ListNode()
  let cur = result
  while(l1 != null && l2 != null){
      if(l1.val <= l2.val){
          cur.next = l1
          l1 = l1.next
      }else {
          cur.next = l2
          l2 = l2.next
      }
      cur = cur.next
  }
  if(l2 != null){
      cur.next = l2
  }
  if(l1 != null){
      cur.next = l1
  }
  return result.next
};