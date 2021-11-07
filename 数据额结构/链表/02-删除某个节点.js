function deleteNode(head, node){
  if(node.next){
    node.val = node.next.val
    node.next = node.next.next
  }else {
    if(hode === head){
      node = null
      head = null
    }else{
      node = head
      while(node.next.next){
        node = node.next
      }
      node.next = null
      node = null
    }
  }
}