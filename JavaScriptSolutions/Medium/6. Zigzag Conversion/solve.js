/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

var convert = function(s, numRows) {
    let rows = [];
    let direction = 1;
    let index = 0;
    let result = '';

    if (numRows === 1) {
        return s;
    }

    for (let i = 0; i < numRows; i++) {
        rows.push('');
    }

    for (let i = 0; i < s.length; i++) {
        rows[index] += s[i];
        index += direction;
        if (index === numRows - 1 || index === 0) {
            direction *= -1;
        }
    }

    for (let i = 0; i < numRows; i++) {
        result += rows[i];
    }

    return result;
};

console.log(convert("PAYPALISHIRING", 3)); // "PAHNAPLSIIGYIR"
console.log('-----------------');
console.log(convert("PAYPALISHIRING", 4)); // "PINALSIGYAHRPI"
console.log('-----------------');
console.log(convert("A", 1)); // "A"