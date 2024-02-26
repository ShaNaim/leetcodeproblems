var cancellable = function (fn, args, t) {
  const timeoutId = setTimeout(() => {
    return fn(...args);
  }, t);
  return () => clearTimeout(timeoutId);
};

const result = [];

const fn = (x) => x * 5;
const args = [2],
  t = 20,
  cancelTimeMs = 50;

const start = performance.now();

const log = (...argsArr) => {
  const diff = Math.floor(performance.now() - start);
  result.push({ time: diff, returned: fn(...argsArr) });
};

const cancel = cancellable(log, args, t);

const maxT = Math.max(t, cancelTimeMs);

setTimeout(cancel, cancelTimeMs);

setTimeout(() => {
  console.log(result); // [{"time":20,"returned":10}]
}, maxT + 15);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const getPaymentPlanData = (key, params = {}) => {
  return request({
    method: "get",
    url: `${ENDPOINTS.payment}student-payment-plan/${key}/`,
    params: params,
  });
};

const [filtredCourse, setFiltredCourse] = useState([]);
useQuery(["course-installment-cost"], () => getPaymentPlanData(DUMMY_ID), {
  enabled: status === "success",
  onSuccess: (result) => {
    const { course_payment_plans, letter_payment_plan } = result;
    const details = formatPaymentData(course_payment_plans, letter_payment_plan);
    setFiltredCourse(details);
  },
});
