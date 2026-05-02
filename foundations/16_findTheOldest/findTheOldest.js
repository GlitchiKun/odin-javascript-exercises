const findTheOldest = function (array) {
  return array
    .map((p) => {
      let age;

      if ("yearOfDeath" in p) {
        age = p.yearOfDeath - p.yearOfBirth;
      } else {
        age = new Date().getFullYear() - p.yearOfBirth;
      }

      return {
        name: p.name,
        age: age,
      };
    })
    .sort((a, b) => a.age - b.age)
    .at(-1);
};

// Do not edit below this line
module.exports = findTheOldest;
