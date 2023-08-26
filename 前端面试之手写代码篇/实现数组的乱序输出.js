let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let i = 0; i < arr.length; i++) {
    const randomIndex = Math.round(Math.random() * (arr.length - 1));
    [arr[randomIndex], arr[i]] = [arr[i], arr[randomIndex]]
}

console.log(arr)