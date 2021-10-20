var normalStack = []
var reverseStack = []

function add(data){
  normalStack.push(data)
  reverseStack.unshift(data)
} 

// 弹出队列第一个元素，如果队列是空，返回null
function poll(){
  var value = null
  if(normalStack.length != 0){
    value = normalStack.shift()
    reverseStack.pop()
  }
  return value
}
// 获取队列第一个元素，不影响队列，找不到返回null
function pee(){
  var value = null
  if(reverseStack.length > 0){
    value = normalStack[0]
  }
  return value
}

