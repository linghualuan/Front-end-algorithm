// 二分法
/**
 * @param { number } x 非负整数
 * @return { number } 返回x的算数平方根
 * **/
function mySqrt(x) {
    let left = mid = 0
    let right = x
    while (left <= right) {
        mid = Math.ceil((right + left) / 2)
        if (mid * mid === x) {
            return mid
        }else {
            if (mid * mid > x) {
                right = mid
            }else if (mid * mid < x) {
                left = mid
            }
            while(right - left === 1) return left
        }
    }
}

let x = 9

console.log(mySqrt(x))
