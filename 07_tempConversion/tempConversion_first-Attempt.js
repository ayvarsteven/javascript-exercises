const ftoc = function (farenheit) {
  let temp = farenheit - 32;
  temp = temp * 0.5556;
//   temp = Number.parseInt(parseFloat(temp).toFixed(1));
  temp = parseFloat(temp).toFixed(1)
  //   temp = Number.parseFloat(temp).toFixed(1);
    // temp = parseInt(temp, 10);
  return Number(temp);
};

const ctof = function (celsius) {
  let temp = celsius * 1.8;
  temp += 32;
  //   temp = Number.parseInt(parseFloat(temp).toFixed(1));
  temp = parseFloat(temp).toFixed(1);
  //   temp = parseInt(temp, 10);
  return Number(temp);
};

let test = ftoc(96);
console.log(test);

let celsiusTest = ctof(73.2);
console.log(celsiusTest);
