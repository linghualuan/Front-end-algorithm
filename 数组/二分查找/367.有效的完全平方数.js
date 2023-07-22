/**
 * @param {number} num
 * @return {boolean}
 */
function isPerfectSquare (num) {
    let left = mid = 0
    let right = num
    while (left <= right) {
        mid = Math.ceil((right + left) / 2)
        if(mid * mid === num) return true
        else if (mid * mid > num) {
            right = mid - 1
        }else if (mid * mid < num) {
            left = mid + 1
        }
    }
    return false
}

let num = 324

console.log(isPerfectSquare(num))