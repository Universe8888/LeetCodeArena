/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let romanToIntMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    let result = 0;
    for (let i = 0; i < s.length; i++) {
        if (romanToIntMap[s[i]] < romanToIntMap[s[i + 1]]) {
            result -= romanToIntMap[s[i]];
        } else {
            result += romanToIntMap[s[i]];
        }
    }
    return result;
};

console.log(romanToInt("III")); // 3
console.log('----------------------------------');
console.log(romanToInt("LVIII")); // 58
console.log('----------------------------------');
console.log(romanToInt("MCMXCIV")); // 1994