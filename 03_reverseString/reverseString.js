const reverseString = function (string) {
  if (string == "") {
    return "";
  }
  let newString = "";
  for (let i = string.length - 1; i >= 0; i--) {
    newString += string[i];
  }
  return newString;
};
console.log(reverseString("Hello"));
// Do not edit below this line
module.exports = reverseString;
