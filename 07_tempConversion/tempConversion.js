const ftoc = function (farenheit) {
  let temp = farenheit - 32;
  temp = temp * 0.5556;
  temp = parseFloat(temp).toFixed(1)
  return Number(temp);
};

const ctof = function (celsius) {
  let temp = celsius * 1.8;
  temp += 32;
  temp = parseFloat(temp).toFixed(1);
  return Number(temp);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
