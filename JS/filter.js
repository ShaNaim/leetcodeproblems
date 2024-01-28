/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
  const filteredArray = [];
  //   arr.forEach((element, index) => {
  //     if (Boolean(fn(element, index))) filteredArray.push(element);
  //   });
  for (let index = 0; index < arr.length; index++) {
    if (fn(arr[index], index)) filteredArray.push(arr[index]);
  }
  return filteredArray;
};
