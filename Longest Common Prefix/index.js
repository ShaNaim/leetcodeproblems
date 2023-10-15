function prefix(words) {
  if (!words[0] || words.length == 1) return words[0] || "";
  let i = 0;
  while (words[0][i] && words.every((w) => w[i] === words[0][i])) i++;
  return words[0].substr(0, i);
}

console.log(1, prefix([]));
console.log(2, prefix([""]));
console.log(3, prefix(["abc"]));
console.log(4, prefix(["abcdefgh", "abcde", "abe"]));
console.log(5, prefix(["abc", "abc", "abc"]));
console.log(6, prefix(["abc", "abcde", "xyz"]));

console.log(
  7,
  prefix([
    "ddfloremips es eothrksjdfhjfskfhdsjkflkfyreerhgytsdfsdfsdfdsfdsfdnvhaoqjerntinvksf",
    "ddfloremips es eothrksjdfhjfskfhdsjkfnmeerhtyfcfgdsdrsdfsdfdserfdsfsdfdsjgnchfbbsf",
    "ddfloremips es eothrksjdfhjfskfhdsjkfjfhrydeermbngdhdefewfwefdssditkncgfuurnvhsksj",
    "ddfloremips es eothrksjdfhjfskfhdsjkfhfgetsxvfreerngccscsdvsfoijklsdfhskldjfirhgir",
    "ddfloremips es eothrksjdfhjfskfhdsjkfjfhteernfhmnvinvnnsijjrjnfhbbijfhtbbbceuiangd",
  ])
);
