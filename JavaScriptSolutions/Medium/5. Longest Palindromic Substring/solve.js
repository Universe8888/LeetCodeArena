/**
 * @param {string} s
 * @return {string}
 */

var longestPalindrome = function(s) {
    let longest = '';
    let current = '';

    function expand(s, left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        return s.slice(left + 1, right);
    }
    
    for (let i = 0; i < s.length; i++) {
        current = expand(s, i, i);
        if (current.length > longest.length) {
            longest = current;
        }
        current = expand(s, i, i + 1);
        if (current.length > longest.length) {
            longest = current;
        }
    }

    return longest;
};

console.log(longestPalindrome("babad")); // "bab"
console.log('-----------------');
console.log(longestPalindrome("cbbd")); // "bb"
