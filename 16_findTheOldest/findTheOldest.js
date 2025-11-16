const findTheOldest = function (people) {
  const currentYear = new Date().getFullYear();

  const sorted = people.sort((a, b) => {
    const ageA =
      (a.yearOfDeath || currentYear) - (a.yearOfBirth || currentYear);
    const ageB =
      (b.yearOfDeath || currentYear) - (b.yearOfBirth || currentYear);
    return ageA - ageB;
  });

  return sorted.at(-1);
};
let test = [
  { name: "Carly", yearOfBirth: 1066 },
  { name: "Jane", yearOfBirth: 1912, yearOfDeath: 1941 },
  { name: "Ray", yearOfBirth: 1962, yearOfDeath: 2011 },
];
findTheOldest(test);
// Do not edit below this line
module.exports = findTheOldest;
