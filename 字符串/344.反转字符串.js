/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
    let leftIndex = 0
    let rightIndex = s.length - 1
    let temp
    while (leftIndex <= rightIndex) {
        temp = s[leftIndex]
        s[leftIndex] = s[rightIndex]
        s[rightIndex] = temp

        leftIndex++
        rightIndex--
    }

    return s
}

let s = ["h", "e", "l", "l", "o"]

console.log(reverseString(s))