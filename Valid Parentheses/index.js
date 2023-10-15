//NOTE: My solution

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const push = ["{", "[", "("];
  const pop = ["}", "]", ")"];
  const mapper = {
    "}": "{",
    "]": "[",
    ")": "(",
  };
  const stack = [];

  for (let index = 0; index < example.length; index++) {
    if (push.includes(String(example[index]))) {
      stack.push(String(example[index]));
    } else if (pop.includes(String(example[index]))) {
      if (stack.pop() !== mapper[String(example[index])]) return false;
    }
  }
  return !Boolean(stack.length);
};

const example = "[]]";
console.log(isValid(example));
// -------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------
//NOTE: Online Solution
// -------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length === 1) return false;

  const parens = s.split("");
  const closedParens = [];

  const mapping = {
    "{": "}",
    "(": ")",
    "[": "]",
  };

  while (parens.length) {
    const current = parens.pop();

    // opening paren
    if (mapping[current]) {
      if (!closedParens.length) return false; // no closed parens

      const closedParen = closedParens.pop();

      if (mapping[current] !== closedParen) return false; // open/closed do not match
    } else {
      closedParens.push(current); // closed paren
    }
  }

  if (closedParens.length) return false; // unmatched closed

  return true;
};
// -------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------
