/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let i = 0;
    let result = 0;
    let sign = 1;
    let max = Math.pow(2, 31) - 1;
    let min = Math.pow(-2, 31);
    while (s[i] === ' ') {
        i++;
    }
    if (s[i] === '+' || s[i] === '-') {
        sign = s[i] === '-' ? -1 : 1;
        i++;
    }
    while (i < s.length && s[i] >= '0' && s[i] <= '9') {
        result = result * 10 + (s[i] - '0');
        i++;
        if (result * sign >= max) {
            return max;
        }
        if (result * sign <= min) {
            return min;
        }
    }
    return result * sign;
};

console.log(myAtoi("42")); // 42;
console.log('-------------------');
console.log(myAtoi("   -42")); // -42;
console.log('-------------------');
console.log(myAtoi("4193 with words")); // 4193;