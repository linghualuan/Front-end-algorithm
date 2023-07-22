/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
    function judgmentStr(str) {
		let size = str.length
		let arr = []
		for (let i = 0; i < size; i++) {
			if (str[i] !== "#") {
				arr.push(str[i])
			} else {
				arr.pop()
			}
		}
		return arr.join("")
	}

    return judgmentStr(s) === judgmentStr(t) ? true : false
}

let s = "xywrrmp", t = "xywrrm#pi"

console.log(backspaceCompare(s, t))