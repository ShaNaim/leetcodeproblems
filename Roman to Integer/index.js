/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const valueChart = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900,
  };
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (char == "I") {
      switch (s[i + 1]) {
        case "V":
          char = "IV";
          i++;
          break;
        case "X":
          char = "IX";
          i++;
          break;
        default:
          break;
      }
    } else if (char == "X") {
      switch (s[i + 1]) {
        case "L":
          char = "XL";
          i++;
          break;
        case "C":
          char = "XC";
          i++;
          break;
        default:
          break;
      }
    } else if (char == "C") {
      switch (s[i + 1]) {
        case "D":
          char = "CD";
          i++;
          break;
        case "M":
          char = "CM";
          i++;
          break;
        default:
          break;
      }
    }
    count = count + valueChart[char];
  }
  return count;
};

const value = "MCMXCIV";

console.log(romanToInt(value));
