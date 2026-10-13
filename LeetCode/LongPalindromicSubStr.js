// Given a string s, return the longest palindromic substring in s.

// Example 1:

// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.
// Example 2:

// Input: s = "cbbd"
// Output: "bb"

// /**
//  * @param {string} s
//  * @return {string}
//  */

var longestPalindrome = function(s) {
     let result = "";

    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < s.length; j++) {
            let str = s.substring(i, j + 1);

            if (str === str.split("").reverse().join("") &&
                str.length > result.length) {
                result = str;
            }
        }
    }

    return result;
};