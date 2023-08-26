function dateFormat(dateInput, format) {
    let year = dateInput.getFullYear()
    let month = dateInput.getMonth() + 1
    let day = dateInput.getDate()
    format = format.replace(/yyyy/, year)
    format = format.replace(/MM/, month)
    format = format.replace(/dd/, day)
    return format
}

console.log(dateFormat(new Date(), 'yyyy年MM月dd日'))