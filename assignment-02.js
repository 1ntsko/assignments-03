const flatten = arr => {
  const result = [];

  arr.forEach(i => {
    if (Array.isArray(i)) {
      result.push(...flatten(i));
    } else {
      result.push(i);
    }
  });

  return result;
};

const arrays = [
  ['first', 'second', ['nested', 'in', 'nested']],
  [1, 2, 3],
  [true],
];

console.log(flatten(arrays)); // ['first', 'second', 'nested', 'in', 'nested' 1, 2, 3, true],
