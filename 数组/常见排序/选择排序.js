function selectionSort(arr) {
    for(let i = 0; i < arr.length; i++) {
        let minIndex = i
        let temp
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[j] < arr[minIndex]) {
                minIndex = j
            }
        }
        temp = arr[i]
        arr[i] = arr[minIndex]
        arr[minIndex] = temp
    }
    return arr
}

let arr = [34, 67, 21, 8, 90, 65, 83, 32, 34]

console.log(selectionSort(arr))