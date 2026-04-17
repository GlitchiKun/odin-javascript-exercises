const removeFromArray = function (array, ...toRemove) {
  return array.filter((element) => !toRemove.includes(element));
};

// Do not edit below this line
module.exports = removeFromArray;
