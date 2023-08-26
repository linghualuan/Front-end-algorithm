/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
    let arr = s.split('')
    let len = s.length
    for (let i = 0; i < len; i += 2 * k) {
        let left = i
        let right = (i + k - 1) >= len - 1 ? len - 1 : i + k - 1
        while (left <= right) {
            let temp
            temp = arr[left]
            arr[left] = arr[right]
            arr[right] = temp
            left++
            right--
        }
    }
    return arr.join('')
}

let s = "abcdefghijklmn",k = 2

console.log(reverseStr(s, k))
