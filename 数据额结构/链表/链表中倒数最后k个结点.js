/*
 * function ListNode(x){
 *   this.val = x;
 *   this.next = null;
 * }
 */
/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param pHead ListNode类 
 * @param k int整型 
 * @return ListNode类
 */
 function FindKthToTail( pHead ,  k ) {
  // write code here
//     let arr = []
//     while(pHead){
//         arr.push(pHead)
//         pHead = pHead.next
//     }
//     return arr[arr.length-k]
  let l1 = pHead
  let l2 = pHead
  let n = k
  while(n){
      n--
      if(l1 === null) return null  // k超过了长度
      l1 = l1.next
  }
  while(l1 !== null){
      l1 = l1.next
      l2 = l2.next
  }
  return l2
}
module.exports = {
  FindKthToTail : FindKthToTail
};