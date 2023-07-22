// 什么条件下使用二分查找(推荐，不是非要满足这两个条件才可以使用二分查找)
// 1.数组是有序的，也就是升序或者降序
// 2.数组中没有重复的元素

// nums为目标数组，target为要查找的目标值

// 第一种写法，[left, right]，闭区间

/**
 * @param { number[] } nums 目标数组 
 * @param { number } target 目标值 
 * @return { number } 目标值的下标
 * **/ 
function binarySearch(nums, target) {
	let left = (middle = 0)
	let right = nums.length - 1
	while (left <= right) {
		middle = Math.ceil((right + left) / 2)
		if (target < nums[middle]) {
			right = middle - 1
		} else if (target > nums[middle]) {
			left = middle + 1
		} else if (target === nums[middle]) {
			return middle
		}
	}
	return -1
}

// 第二种写法，[left, right]，开区间
/**
 * @param { number[] } nums 目标数组 
 * @param { number } target 目标值 
 * @return { number } 目标值的下标
 * **/ 
var search = function (nums, target) {
	// right是数组最后一个数的下标+1，nums[right]不在查找范围内，是左闭右开区间
	let mid,
		left = 0,
		right = nums.length
	// 当left=right时，由于nums[right]不在查找范围，所以不必包括此情况
	while (left < right) {
		// 位运算 + 防止大数溢出
		mid = left + ((right - left) >> 1)
		console.log("mid", mid)
		// 如果中间值大于目标值，中间值不应在下次查找的范围内，但中间值的前一个值应在；
		// 由于right本来就不在查找范围内，所以将右边界更新为中间值，如果更新右边界为mid-1则将中间值的前一个值也踢出了下次寻找范围
		if (nums[mid] > target) {
			right = mid // 去左区间寻找
		} else if (nums[mid] < target) {
			left = mid + 1 // 去右区间寻找
		} else {
			return mid
		}
	}
	return -1
}

let nums = [-1, 0, 3, 5, 9, 12],
	target = -1

console.log(search(nums, target))
