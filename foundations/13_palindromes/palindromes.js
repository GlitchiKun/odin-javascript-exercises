const palindromes = function (s) {
  const alphanumerical = "abcdefghijklmnopqrstuvwxyz0123456789";
  const cleanString = s
    .toLowerCase()
    .split("")
    .filter((c) => alphanumerical.includes(c))
    .join("");
  return cleanString == cleanString.split("").reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
