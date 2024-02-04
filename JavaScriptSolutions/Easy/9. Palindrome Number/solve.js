/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    function reverse(x) {
        let result = 0;
        while (x > 0) {
            result = result * 10 + x % 10;
            x = Math.floor(x / 10);
        }
        return result;
    }
    if (x < 0) {
        return false;
    }
    return x === reverse(x);
};

console.log(isPalindrome(121)); // true
console.log('-------------------');
console.log(isPalindrome(-121)); // false
console.log('-------------------');
console.log(isPalindrome(10)); // false