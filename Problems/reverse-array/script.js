const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const reverseArray = (array) => {
  let start = 0;
  let end = array.length - 1;

  while (start < end) {
    let temp;
    temp = array[start];
    array[start] = array[end];
    array[end] = temp;

    start++;
    end--;
  }

  return array;
};

console.log(reverseArray(array));
