/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function EntryNodeOfLoop(pHead)
{
    // write code here
    if(!pHead) return null
    let map = new Map()
    while(pHead){
        if(map.get(pHead) !== undefined){
            return pHead
        }
        map.set(pHead, pHead)
        pHead = pHead.next
    }
    return null
}
module.exports = {
    EntryNodeOfLoop : EntryNodeOfLoop
};