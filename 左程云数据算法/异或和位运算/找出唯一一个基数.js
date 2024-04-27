/**
 * 一组数种，只有一种数出现寄数词，其余的数都出现偶数次。找出这个奇数
 * 
 * 重点： 0 ^ N = N; N ^ N = 0; a^b^c = a^(b^c)
 * arr = [1,2,3,1,2,3,1]
 * arr = [1,1,1,2,2,3,3]
 * 1^1^1 = 1; 2^2 = 0; 3^3 = 0;
 * 1^0^0 = 1; 这个就是奇数次的数
 */
function sortProcess (arr) {
  let end
  for (let i = 0; i < arr.length; i ++) {
    end ^= arr[i]
  }
  return end
}