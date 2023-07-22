/**
 * @param {number[]} nums
 * @return {number}
 */
function removeDuplicates (nums) {
    let k = 0
    for(let i = 0; i < nums.length; i++) {
        if (nums[k] !== nums[i]) {
            nums[++k] = nums[i]
        }
    }
    return k + 1
}

let nums = [0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 4]

console.log(removeDuplicates(nums))