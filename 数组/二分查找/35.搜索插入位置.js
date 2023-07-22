let nums = [1, 3, 5, 8, 10, 14],
	target = 4

function binarySearch(nums, target) {
	let left = (mid = 0)
	let right = nums.length - 1
	if (target < nums[0]) {
		return 0
	} else if (target > nums[nums.length - 1]) {
		return nums.length
	} else {
		while (left <= right) {
			mid = Math.ceil((right + left) / 2)
			if (target < nums[mid]) {
				right = mid - 1
			} else if (target > nums[mid]) {
				left = mid + 1
			} else if (target === nums[mid]) {
				return mid
			}
		}
		if (target < nums[right]) {
			return right - 1
		} else {
			return right + 1
		}
	}
}
console.log(binarySearch(nums, target))