// 快慢指针
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let k = 0
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] !== 0) {
            nums[k] = nums[i]
            if(i !== k) {
                nums[i] = 0
            }
            k++
        }
    }
    return nums
}

// let nums = [0, 1, 0, 3, 0, 12]
let nums = [1]

console.log(moveZeroes(nums))