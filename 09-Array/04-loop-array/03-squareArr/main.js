const arr = [2, 3, 5, 7, 11];
// squareArr(arr); // [4, 9, 25, 49, 121]

function squareArr(arr) {
const newArr= [];

arr.forEach((item,index,array) => {
    newArr[index] = item**2;
});
console.log(newArr);
}

squareArr(arr);