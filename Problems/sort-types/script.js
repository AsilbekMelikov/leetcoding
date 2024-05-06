const array = [
  "1",
  2,
  3,
  true,
  "hello",
  false,
  true,
  { firstname: "Alex" },
  30,
  { lastname: "Sophie" },
];

// The first way of a solution
const sortTypes1 = (array) => {
  const obj = {};

  for (let item of array) {
    if (obj[typeof item]) {
      obj[typeof item].push(item);
    } else {
      obj[typeof item] = [item];
    }
  }
  return obj;
};

// The second way of the solution

const sortTypes2 = (array) => {
  const result = array.reduce((init, curr) => {
    if (init[typeof curr]) {
      init[typeof curr].push(curr);
    } else {
      init[typeof curr] = [curr];
    }
    return init;
  }, {});

  return result;
};

console.log(sortTypes2(array));
