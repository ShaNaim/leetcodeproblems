/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  let mergedString = "";
  for (let index = 0; index < (Boolean(word1.length > word2.length) ? word1.length : word2.length); index++) {
    mergedString = mergedString + (word1[index] || "") + (word2[index] || "");
  }
  return mergedString;
};
console.log(mergeAlternately("abcd", "efghijk"));
