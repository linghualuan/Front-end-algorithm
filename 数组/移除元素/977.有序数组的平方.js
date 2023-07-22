// 使用归并排序的方法
function sortedSquares (nums) {
    let len = nums.length
    if(nums.length <= 1) return [nums[0] * nums[0]]

    let midIndex = Math.floor(len / 2)

    let leftArr = nums.slice(0, midIndex)
    let rightArr = nums.slice(midIndex)

        
    function sortedSquaresSort(left, right) {
        let result = []

        while (left.length && right.length) {
            if (left[0] < right[0]) {
                result.push(left.shift())
            } else {
                result.push(right.shift())
            }
        }

        if (left.length) result = [...result, ...left]
        if (right.length) result = [...result, ...right]

        return result
    }

    return sortedSquaresSort(sortedSquares(leftArr), sortedSquares(rightArr))
}

let nums = [-7, -3, 2, 3, 11]

console.log(sortedSquaresSort(nums))


// 双指针做法
function doublePointer(nums) {
	let result = []

	for (let i = 0, j = nums.length - 1; i <= j; ) {
		const left = Math.abs(nums[i])
		const right = Math.abs(nums[j])

		if (left > right) {
			result.unshift(left * left)
			i++
		} else {
			result.unshift(right * right)
			j--
		}
	}

	return result
}

console.log(doublePointer(nums))