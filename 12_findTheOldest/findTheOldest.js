    const people = [
      {
        name: 'Undying Person',
        yearOfBirth: 1016,
      },
      {
        name: "Carly",
        yearOfBirth: 2018,
      },
      {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
      },
      {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
      },
    ]

const findTheOldest = function(array) {
    const today = new Date()
    const currentYear = today.getFullYear()
    const age = array.map((person) => {
      if(person.yearOfDeath !== undefined) {
        return person.yearOfDeath - person.yearOfBirth
      } else if (person.yearOfDeath === undefined) {
        return currentYear - person.yearOfBirth
      }
    }) 
    for(i = 0; i < array.length; i++) {
      array[i].age = age[i]
    }
    const oldest = array.sort((a, b) => {
      return a.age < b.age? 1 : -1;
    });
    return array
};
console.log(findTheOldest(people))

// Do not edit below this line
module.exports = findTheOldest;
