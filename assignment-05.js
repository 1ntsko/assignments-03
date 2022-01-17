const people = [
  {
    name: 'George',
    age: 25,
  },
  {
    name: 'Michael',
    age: 26,
  },
  {
    name: 'Anna',
    age: 25,
  },
  {
    name: 'Kate',
    age: 27,
  },
  {
    name: 'James',
    age: 27,
  },
  {
    name: 'Peter',
    age: 32,
  },
  {
    name: 'Jacob',
    age: 27,
  },
];

const groupBy = (array, key) => {
  return array.reduce((result, currentValue) => {
    (result[currentValue[key]] = result[currentValue[key]] || []).push(
      currentValue
    );
    return result;
  }, {});
};
