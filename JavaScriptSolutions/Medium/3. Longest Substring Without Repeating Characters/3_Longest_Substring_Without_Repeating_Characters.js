/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let longest = 0;
    let shortest = 0;
    let current = "";
    let index = 0;
    let char = "";
    let length = s.length;
    let map = new Map();

    for(let i = 0; i < length; i++){
        char = s.charAt(i);
        index = current.indexOf(char);
        if(index > -1){
            shortest = Math.max(shortest, current.length);
            current = current.substring(index + 1);
        }
        current += char;
    }

    longest = Math.max(shortest, current.length);
    return longest;
};

console.log(lengthOfLongestSubstring("abcabcbb")); // 3
console.log(lengthOfLongestSubstring("bbbbb")); // 1
console.log(lengthOfLongestSubstring("pwwkew")); // 3