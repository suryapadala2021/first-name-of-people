const ratioOfTwoNumbers = require("../ratio/index.js");
const factorialOfNumber = require("../factorial/index.js");
const ratioAndFactorial = (n1, n2, n3) => {
  return { ratio: ratioOfTwoNumbers(n1, n2), factorial: factorialOfNumber(n3) };
};
module.exports = ratioAndFactorial;
