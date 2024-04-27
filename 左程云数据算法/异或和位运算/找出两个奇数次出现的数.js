/**
 * 一组数种，有两种种数出现寄数词，其余的数都出现偶数次。找出这个奇数
 * 
 * 重点： 0 ^ N = N; N ^ N = 0; a^b^c = a^(b^c)
 * arr = ['a','a','a','b','b','c','c','e','e','e']
 * let n1 = a^a^a^b^b^c^c^e^e^e = a^e
 * 两种数，证明a 不等于 e，也就是a||e一定有一个是非0。
 * 所以 n1 不是0, 也就是在位运算上，n一定至少有一位是1（我们随便拿，一般拿最右侧的第一个是1的就可以， let rightOne = n & (~n + 1)）
 * 假设奇数位1的是a， 那奇数位0的就是e
 * let n2 ^= 第8位为1的数，得到 a; let n2 ^= 第8位为0的数，得到e
 * 那两个寄数次的数就是 n2 和 n ^ n2
 */
// 位运算，所以只能是数
function sortProcess (arr) {
  let n1 = 0
  for (let i = 0; i < arr.length; i++) {
    // let n = a^a^a^b^b^c^c^e^e^e = a^e
    n1 ^= arr[i]
  }
  // * 两种数，证明a 不等于 e，也就是a||e一定有一个是非0。
  // * 所以 n1 不是0, 也就是在位运算上，n一定至少有一位是1（我们随便拿，一般拿最右侧的第一个是1的就可以， let rightOne = n & (~n + 1)）
  const rightOne = n1 & (~n1 + 1)
  let n2 = 0
  for (let j = 0; j < arr.length; j++) {
    // * 假设奇数位1的是a， 那奇数位0的就是e
    // & 相同 1； 不同0，这里取1，所以 n2是a
    if ((rightOne & arr[j]) == 1) {
      n2 ^= arr[j]
    }
    // 得到
  }
  console.log('两个奇数次出现的数是：', n2, n1 ^ n2)
}