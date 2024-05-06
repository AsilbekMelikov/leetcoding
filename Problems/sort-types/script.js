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

const sortTypes = (array) => {
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

console.log(sortTypes(array));
