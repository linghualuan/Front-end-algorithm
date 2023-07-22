function qickSort(arr) {
    // 如果长度小于等于1，直接返回
    if(arr.length <= 1) return arr

    let leftIndex = 0
    let rightIndex = arr.length - 1
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2)

    // 以中间的值为基值
    let middleVal = arr.splice(middleIndex, 1)[0]

    // 定义左右数组
    let leftArr = []
    let rightArr = []

    for(let i = 0; i < arr.length; i++) {
        arr[i] > middleVal ? rightArr.push(arr[i]) : leftArr.push(arr[i])
    }

    return qickSort(leftArr).concat(middleVal, qickSort(rightArr))
}

let arr = [23, 45, 11, 90, 67, 43, 10, 45, 92, 31]

console.log(qickSort(arr))