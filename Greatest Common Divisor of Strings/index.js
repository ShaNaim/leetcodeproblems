// Example usage:
const str1 = "ABABAB";
const str2 = "AB";

var gcdOfStrings = function (str1, str2) {
  if (str1 + str2 !== str2 + str1) return "";
  return str1.slice(0, getValue(str1.length, str2.length));
};

const getValue = (str1, str2) => {
  if (!str2) return str1;
  return getValue(str2, str1 % str2);
};

console.log(gcdOfStrings(str1, str2));
