let arr = [1, 2, [4, 5, [6, 7, [8]], 9], 10]

function flatten (arr) {
    return arr.reduce((acc, cur) => {
        return acc.concat(Array.isArray(cur) ? flatten(cur) : cur)
    }, [])
}

console.log(flatten(arr))