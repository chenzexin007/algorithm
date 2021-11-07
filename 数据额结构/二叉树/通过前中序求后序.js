function reBuilidVin(pre, min, vin=[]){
  if(pre.length === 0){ return []}
  if(pre.length === 1){ return pre[0] }
  const rootVal = pre[0]
  const index = min.findIndex(item => { return item === rootVal })
  const preLeft = pre.slice(1,index+1)
  const minLeft = min.slice(0, index)
  const preRight = pre.slice(index+1)
  const minRight = min.slice(index+1)
  vin.push(reBuilidVin(preLeft, minLeft))
  vin.push(reBuilidVin(preRight, minRight))
  vin.push(rootVal)
  return vin
}