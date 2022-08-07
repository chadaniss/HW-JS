const arr = [11, 17, 23, 13, 7, 19];

// function compareFn(a,b){

//     if(a <b){
//         return 1
//     }else{
//         return -1
//     }
// }
// console.log(arr.sort(compareFn))

// ----------- แบบสั้นสุดๆ----------
console.log(arr.sort((a,b) => a < b ? 1 : -1))