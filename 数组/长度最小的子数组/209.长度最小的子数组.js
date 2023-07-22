// 双层遍历
function minSubArrayLen(target, nums) {
    let result = []
    for(let i = 0; i < nums.length; i++) {
        if (nums[i] >= target) {
            result = [1]
            return result
        } else {
            let num = nums[i]
            for(let j = i + 1; j < nums.length; j++) {
                num += nums[j]
                if(num >= target) {
                    result.push(j + 1 - i)
                    break
                }
            }
        }
    }
    return result.length >= 1 ? Math.min(...result) : 0
}


// 使用指针
function minSubArrayLenByPointer(target, nums) {
    let start = end = 0
    let sum = 0
    let len = nums.length
    let ans = Infinity

    while (end < len) {
        sum += nums[end]
        while (sum >= target) {
            ans = Math.min(ans, end - start + 1)
            sum -= nums[start]
            start++
        }

        end++
    }
    return ans === Infinity ? 0 : ans
}

let target = 7,
	nums = [2, 3, 1, 2, 4, 3]
console.log(minSubArrayLenByPointer(target, nums))
