let memoInput = [];
let sum = 0;

const receiveInput = () => {
  let num;
  let isInput = true;
  num = prompt('Enter number');

  while (checkCondition(num)) {
    if (isInput) {
      memoInput.push(+num);
      sum += +num;
      isInput = false;
    } else {
      num = prompt('Enter number');
      isInput = true;
    }
  }
  console.log('sum', sum);
  console.log('memoInput', memoInput);
  return memoInput;
};

const checkCondition = value => {
  return !isNaN(value) && value !== null && value !== '';
};

receiveInput();