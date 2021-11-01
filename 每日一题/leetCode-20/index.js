/**
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

  有效字符串需满足：

  左括号必须用相同类型的右括号闭合。
  左括号必须以正确的顺序闭合。
  输入：s = "()[]{}"
  输出：true
 */
  var isValid = function(s) {
    if(s == '') return true
    let hashLeft = {
        '(':')',
        '{':'}',
        '[':']'
    }
    let hashRight = {
        ')':'(',
        '}':'{',
        ']':'['
    }
    let stack = []
    let arr = s.split('')
    for(let i=0; i<arr.length; i++){
        if(i==0){  // 第一个处理
            if(hashLeft[arr[i]] != undefined){
                stack.push(arr[i])
            }
            if(hashRight[arr[i]] != undefined){
                return false
            }           
        }else{
            if(hashLeft[arr[i]] != undefined){
                stack.push(arr[i])
            }
            if(hashRight[arr[i]] != undefined){
                if(stack.length){
                    if(hashRight[arr[i]] != stack.pop()){
                        return false
                    }
                } else {
                    return false
                }
            }
        }

    }
    return stack.length == 0
};