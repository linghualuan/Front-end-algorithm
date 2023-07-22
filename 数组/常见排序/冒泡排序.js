function bubbleSort(nums) {
    let temp
    for(let i = 0; i < nums.length - 1; i++) {
        for(let j = 0; j < nums.length - 1- i; j++) {
            if(nums[j] > nums[j + 1]) {
                temp = nums[j]
                nums[j] = nums[j + 1]
                nums[j + 1] = temp
            }
        }
    }
    return nums
}

let nums = [34, 67, 21, 8, 90, 65, 34, 83, 32]

console.log(bubbleSort(nums))