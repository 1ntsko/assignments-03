const people = [
  {
    name: 'Ben',
    age: 30,
    occupation: 'Banker',
    salary: 3000,
    pets: [],
  },
  {
    name: 'Jane',
    age: 26,
    occupation: 'Teacher',
    salary: 1200,
    pets: ['dog'],
  },
  {
    name: 'John',
    age: 31,
    occupation: 'Developer',
    salary: 4000,
    pets: ['dog', 'cat'],
  },
  {
    name: 'Mike',
    age: 26,
    occupation: 'Developer',
    salary: 5000,
    pets: [],
  },
  {
    name: 'Tom',
    age: 34,
    occupation: 'Teacher',
    salary: 3400,
    pets: ['dog', 'parrot'],
  },
];

// 1. Calculate sum of all teacher salaries
const salaries = people
  .filter(person => person.occupation === 'Teacher')
  .map(person => person.salary)
  .reduce((acc, curr) => acc + curr);

// 2. Create a new array with the same people but double salaries of developers
const doubleSalariesOfDevelopers = people.map(person => {
  if (person.occupation === 'Developer') {
    return {
      ...person,
      salary: person.salary * 2,
    };
  }
  return person;
});

// 3. Filter people who has a dog
const hasDog = people.filter(person => person.pets.includes('dog'));

// 4. Figure out if all the people have pets or not
people.every(person => person.pets.length >= 1);

// 5. Figure out if any of the people are above age 30
people.some(person => person.age > 30);
