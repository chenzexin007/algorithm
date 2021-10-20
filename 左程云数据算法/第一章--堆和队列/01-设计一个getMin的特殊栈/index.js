var normalStack = []
var minStack = []

// 压栈
function push(data){
  normalStack.push(data)
  if(minStack.length == 0){
    minStack.push(data)
  } else {
    if(data <= getMin()){
      minStack.push(data)
    }
  }
}

// 弹栈
function pop(){
  var value = normalStack[normalStack.length-1]
  if(value != minStack[0]){
    normalStack.pop()
  }else {
    normalStack.pop()
    minStack.pop()
  }
  return value
}

// getMin获取最小值
function getMin(){
  return minStack[minStack.length-1]
}