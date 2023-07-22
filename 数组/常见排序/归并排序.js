// 分数组
function mergeSort(arr) {
	let len = arr.length
	// 如果长度小于1，直接返回
	if (arr.length <= 1) return arr

	// 获取数组的中间索引
	let middle = Math.floor(len / 2)
	// 定义左右两边的数组
	let left = arr.slice(0, middle)
	let right = arr.slice(middle)

	// 递归，mergeSort方法对数组进行拆分，merge对数组进行组合
	return merge(mergeSort(left), mergeSort(right))
}

// 合数组
function merge(left, right) {
    // 定义组合之后数组的返回值
    let result = []

    // 当左右数组其中一项为空时，跳出while循环
    while(left.length && right.length) {
		// 如果左数组的第一项大于右数组数组的第一项，就向result数组中添加此项，并删除此项
		/**
		 * 比如：left = [4, 8], right = [7, 9]
		 *
		 * 第一次遍历：left[0] < right[0]，则向result数组中添加left[0]，并删除left[0]，此时左右数组变为left = [8]，right = [7, 9]
		 * 第二次遍历：right[0] < left[0]，则向result数组中添加right[0]，并删除right[0]，此时左右数组变为left = [8]，right[9]
         * 第三次遍历：left[0] < right[0]，则向result数组中添加left[0]，并删除left[0]，此时左右数组变为left = []，right = [9]
         * 此时left为空，跳出循环
		 * **/
		if (left[0] < right[0]) {
			result.push(left.shift())
		} else {
			result.push(right.shift())
		}
	}

    // 如果左数组不为空，那么由前面操作可知，右数组必定为空。向result的末尾添加左数组，此时result数组必定是由小到大排列
    if (left.length) result = [...result, ...left]

    // 与上面左数组逻辑相同
    if (right.length) result = [...result, ...right]

    return result
}

// let arr = [34, 67, 21, 8, 90, 65, 83, 32, 34]
let arr = [-4, -1, 0, -8, 10]

console.log(mergeSort(arr))