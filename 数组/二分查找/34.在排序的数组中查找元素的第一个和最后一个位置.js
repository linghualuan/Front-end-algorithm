/**
 * @param {number[]} nums 目标数组
 * @param {number} target 目标值
 * @return { number[] } 目标值的下标
 */ 

let nums = [5, 7, 7, 8, 8, 8, 8, 8, 10], target = 11
// let nums = [], target = 4

// 第一种方法
function searchRange(nums, target) {
    if(nums.length === 0 || target < nums[0] || target > nums[nums.length - 1]) return [-1, -1]
    let left = 0
    let right = nums.length - 1
    while(left <= right) {
        if(target > nums[left] && target < nums[right]) {
            left++
            right--
        }else if(target > nums[left] && target === nums[right]) {
            left++
        }else if(target === nums[left] && target < nums[right]) {
            right--
        }else if(target === nums[left] && target === nums[right]) {
            return [left, right]
        }else {
            return [-1, -1]
        }
    }
    return [-1, -1]
}


// 第二种方法
function search(nums, target) {
    let left = 0
    let right = nums.length - 1
    while (left <= right) {
        let mid = Math.ceil((left + right) / 2)
        if(target === nums[mid]) {
            let tempLeft = tempRight = mid
            while(nums[tempLeft - 1] === target)  tempLeft--
            while(nums[tempRight + 1] === target) tempRight++
            return [tempLeft, tempRight]
        }else if(target < nums[mid]) {
            right = mid - 1
        }else if(target > nums[mid]) {
            left = mid + 1
        }
    }

    return [-1, -1]
}

console.log(search(nums, target))