let flattened = [
  [0, 1],
  [2, 3],
  [4, 5],
];

function flattArr(array) {
  let flattArr = array.reduce((acc, item) => {
    return acc.concat(item); //?
  }, []);
  return flattArr;
}
console.log(flattArr(flattened)); //?
