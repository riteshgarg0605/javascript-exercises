const removeFromArray = function (...args) {
  const newArray = args[0];
  return newArray.filter((item) => !args.includes(item));
};
// Do not edit below this line
module.exports = removeFromArray;
