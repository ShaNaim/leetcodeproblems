var isIsomorphic = function (s, t) {
	if (s.length !== t.length) {
		return false;
	}
	var isomorphicMapOfS = {};
	var isomorphicMapOfT = {};
	for (var i = 0; i < s.length; i++) {
		var letterOfS = s[i],
			letterOfT = t[i];

		if (isomorphicMapOfS[letterOfS] === undefined && isomorphicMapOfT[letterOfT] === undefined) {
			isomorphicMapOfS[letterOfS] = letterOfT;
			isomorphicMapOfT[letterOfT] = letterOfS;
		} else if (isomorphicMapOfS[letterOfS] !== letterOfT && isomorphicMapOfT[letterOfT] !== letterOfS) {
			return false;
		}
	}
	return true;
};
console.log(isIsomorphic("egg", "add")); // true
console.log(isIsomorphic("paper", "title")); // true
console.log(isIsomorphic("kick", "side")); // false

console.log(isIsomorphic("badc", "baba")); // false
