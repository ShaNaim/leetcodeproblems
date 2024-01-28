For two strings s and t, we say "t divides s" if and only if s = t + ... + t (i.e., t is concatenated with itself one or more times).

Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

Example 1:

Input: str1 = "ABCABC", str2 = "ABC"
Output: "ABC"
Example 2:

Input: str1 = "ABABAB", str2 = "ABAB"
Output: "AB"
Example 3:

Input: str1 = "LEET", str2 = "CODE"
Output: ""

Constraints:

1 <= str1.length, str2.length <= 1000
str1 and str2 consist of English uppercase letters.

// Tests
const str1 = "ABCCDFAB";
const str2 = "AB";

/\*\*

- @param {string} str1
- @param {string} str2
- @return {string}
  \*/
  var gcdOfStrings = function (str1, str2) {
  const result = getDevideValue(str1, str2);
  return result.recur === 0 ? "" : result.value;
  };
  const getDevideValue = (str1, str2) => {
  if (str2 === "") return 0;
  const devide_value = str2 !== "" ? countOccurrences2(str1, str2) : 0;
  const { recur, value } = getDevideValue(str1, str2.slice(0, -1));
  console.log({ str1, str2, recur, value });
  return devide_value < recur ? { recur: recur, value: value } : { recur: devide_value, value: str2 };
  };
  const countOccurrences2 = (str1, str2) => str1.split(str2).length - 1;

console.log(gcdOfStrings(str1, str2));
