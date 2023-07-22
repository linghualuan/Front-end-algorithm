// 使用两个for循环，时间复杂度为O(n^2)
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
function removeElement(nums, val) {
    for (let i = 0; i < nums.length; i++) {
		if (nums[i] === val) {
			for (let j = i; j < nums.length; j++) {
				nums[j] = nums[j + 1]
			}
			nums.length--
			i--
		}
	}
    return nums.length
}

// 快慢指针方法
function removeElement2(nums, val) {
    // k为快慢指针
    let k = 0
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] != val) {
			nums[k++] = nums[i]
		}
	}
	return k
}

let nums = [0,1,2,2,3,0,4,2], val = 2

console.log(removeElement2(nums, val))
