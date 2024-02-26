/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */

var timeLimit_opt = function (fn, t) {
  return async function (...args) {
    const result = await Promise.race([
      fn(...args),
      new Promise((_, reject) => setTimeout(() => reject("Time Limit Exceeded"), t)),
    ]);
    return result;
  };
};

var timeLimit = function (fn, t) {
  const limit = new Promise((resolve, reject) => {
    setTimeout(() => {
      return reject(new Error("Time Limit Exceeded"));
    }, t);
  });
  return async function (...args) {
    const limit_2 = fn(...args);
    return await Promise.race([limit, limit_2]);
  };
};

// const limited_basic = timeLimit((t) => new Promise((res) => setTimeout(res, t)), 10);
// limited_basic(150).catch(console.log); // "Time Limit Exceeded" at t=100ms

(async () => {
  const fn1 = async (n) => {
    await new Promise((res) => setTimeout(res, 100));
    return n * n;
  };
  const inputs1 = [4],
    t1 = 50;
  const limited2 = timeLimit(fn1, t1);
  const start = performance.now();
  let result;
  try {
    const res = await limited2(...inputs1);
    result = { resolved: res, time: Math.floor(performance.now() - start) };
  } catch (err) {
    result = { rejected: err, time: Math.floor(performance.now() - start) };
  }
  console.log(result);
})(); // {"rejected":"Time Limit Exceeded","time":50}
