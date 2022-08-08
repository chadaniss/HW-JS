const array = [29, 17, 13, 47, 23, 31];

let sum=0;
function multiple(item,index,arr){
    sum += +item;
}
array.forEach(multiple);
console.log(sum);


// ----------------Sol #2 --------------
// const array = [29, 17, 13, 47, 23, 31];

// let sum = 0;

// for(let i = 0; i < array.length; i++){
//     sum += array[i]
// }
// console.log(sum)

// ------------------Sol #3 --------------
// const array = [29, 17, 13, 47, 23, 31];
// let sum = 0;
// for(let index in array){
//     sum += array[index]
// }
// console.log(sum)


// ------------------Sol #4 --------------
// const array = [29, 17, 13, 47, 23, 31];
// let sum = 0;
// for(let item of array){

// }