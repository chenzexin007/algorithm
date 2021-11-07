/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function FindFirstCommonNode(pHead1, pHead2)
{
    // write code here
    let testLength1 = pHead1
    let testLength2 = pHead2
    let n = 0
    while(testLength1){
        n++
        testLength1 = testLength1.next
    }
    while(testLength2){
        n--
        testLength2 = testLength2.next
    }
    let cur1 = n > 0 ? pHead1 : pHead2
    let cur2 = cur1 === pHead1 ? pHead2 : pHead1
    let abs = Math.abs(n)
    while(abs){
        abs--
        cur1 = cur1.next
    }
    while(cur1 !== cur2){
        cur1 = cur1.next
        cur2 = cur2.next
    }
    return cur1
}
module.exports = {
    FindFirstCommonNode : FindFirstCommonNode
};