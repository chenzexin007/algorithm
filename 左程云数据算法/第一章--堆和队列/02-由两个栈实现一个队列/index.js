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
// 获取队列第几个元素，不影响队列，找不到返回null

function pee(index){
  var value = null
  if(reverseStack.length-1 >= index){
    value = normalStack[index]
  }
  return value
}

