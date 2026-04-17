const repeatString = function (string, occurence) {
  if (occurence < 0) {
    return "ERROR";
  }

  let result = "";

  for (let i = 0; i < occurence; i++) {
    result += string;
  }

  return result;
};

// Do not edit below this line
module.exports = repeatString;
