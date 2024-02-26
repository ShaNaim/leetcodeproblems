var TimeLimitedCache = function () {
  this.cache = {};
  this.timer = [];
  this.counter = 0;
};

/**
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function (key, value, duration) {
  clearInterval(this.counter - 1);
  let result = false;
  if (Boolean(this.cache.hasOwnProperty(key))) result = true;
  this.cache[key] = value;
  this.timer[this.counter++] = setTimeout(() => {
    delete this.cache[key];
  }, duration);
  return result;
};

/**
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function (key) {
  if (!Boolean(this.cache.hasOwnProperty(key))) return -1;
  return this.cache[key];
};

/**
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function () {
  return Object.keys(this.cache).length;
};

const timeLimitedCache = new TimeLimitedCache();
console.log(timeLimitedCache.set(1, 2, 200), "SET"); // false
console.log(timeLimitedCache.set(10, 20, 400), "SET"); // false
setTimeout(() => {
  console.log(timeLimitedCache.count(), "COUNT-1"); // 1
}, 50);
setTimeout(() => {
  console.log(timeLimitedCache.count(), "COUNT-2"); // 1
}, 100);
setTimeout(() => {
  console.log(timeLimitedCache.count(), "COUNT-3"); // 1
}, 300);
setTimeout(() => {
  console.log(timeLimitedCache.count(), "COUNT-4"); // 1
}, 500);
// setTimeout(() => {
//   console.log(timeLimitedCache.set(1, 50, 100), "SET"); // false
// }, 40);
// setTimeout(() => {
//   console.log(timeLimitedCache.get(1), "GET"); // 42
// }, 50);
// setTimeout(() => {
//   console.log(timeLimitedCache.get(1), "GET"); // 42
// }, 120);
// setTimeout(() => {
//   console.log(timeLimitedCache.get(1), "GET"); // 42
// }, 200);
