/**
 * @param {number} x
 * @return {number}
 */

var reverse = function(x) {
    let result = 0;
    let isNegative = false;
    let remainder = 0;

    if (x < 0) {
        isNegative = true;
        x *= -1;
    }

    while (x > 0) {
        remainder = x % 10;
        result = result * 10 + remainder;
        x = Math.floor(x / 10);
    }

    if (result > Math.pow(2, 31) - 1) {
        return 0;
    }

    return isNegative ? result * -1 : result;
};

console.log(reverse(123)); // 321
console.log('-----------------');
console.log(reverse(-123)); // -321
console.log('-----------------');
console.log(reverse(120)); // 21