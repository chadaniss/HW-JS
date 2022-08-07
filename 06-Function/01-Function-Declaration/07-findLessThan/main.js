// sol #1
// function min(a,b) {
//     if (a<b){
//         return a;
//     } else{
//         return b;
//     }
// }

// let result = min(2,100)
// alert(result);


// sol #2
// function min(a,b) {
//     if (a<b){
//         return a;
//     }
//         return b; // fn will return 1 time only
// }
// let result = min(5,99)
// alert(result);


// sol #3
function min(a,b) {
    return a<b ? a : b
}
let result = min(2,100)
console.log(result);
console.log(min(45,54));