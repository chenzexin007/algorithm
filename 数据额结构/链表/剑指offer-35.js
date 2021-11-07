// 复杂链表的复制
function Clone(pHead){
  let map = new Map()
  let cur = pHead
  while(cur){
    map.set(cur, { label: cur.label, next: null, random: numm })
    cur = cur.next
  }
  while(cur){
    let curNode = map.get(cur)
    // next处理
    
    curNode.next = map.get(cur.next)

    // random处理
    curNode.random = map.get(cur.random)

    cur = cur.next
  }
  return map.get(pHead)
}