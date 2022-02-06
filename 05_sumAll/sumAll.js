const sumAll = function (num1, num2) {
  if (
    num1 < 0 ||
    num2 < 0 ||
    typeof num1 != "number" ||
    typeof num2 != "number"
  ) {
    return "ERROR";
  }
  let sum = 0;
  let start = num1 < num2 ? num1 : num2;
  let end = num1 < num2 ? num2 : num1;
  console.log(`start:${start}, end:${end}`);
  for (let i = start; i <= end; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
