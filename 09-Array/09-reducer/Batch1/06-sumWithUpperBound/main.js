let str = '31 45 12 67 34 86 23 37 19 41';

function sumBelow40(str) {
  const createArr = str.split(' ');
  const result = createArr.reduce((acc, item) => {
    if (item < 40) {
      acc += +item;
    }
    return acc;
  }, 0);
  return result;
}
console.log(sumBelow40(str));

// let str = '31 45 12 67 34 86 23 37 19 41';

// const arrNum = str.split(" ")

// let sum = arrNum.reduce(function(acc,item,index,array){
//     if(item < 40){
//         acc += +item
//     }
//     return acc
// } ,0)

// sum //?
