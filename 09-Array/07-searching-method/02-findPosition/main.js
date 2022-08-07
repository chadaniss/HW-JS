const alphabets = ['a', 'b', 'a', 'c', 'a', 'd'];
// let newAlphabets = [];
// const result = alphabets.filter(function(item,index,array) {
    
//     if(item === 'a'){
//         newAlphabets[index] = index;
//         // return newAlphabets;
//     }else{
//         newAlphabets.pop(alphabets[index])
//     }

// })

// console.log(result)
// console.log(newAlphabets)



// const result = alphabets.indexOf(function(item,index) {
    
//     if (item === 'a') {
//         if(index === 0){
//             alphabets.indexOf(item);
//         }else{
//             alphabets.indexOf(item,index+1);
//         }
//     }
// })

// console.log(result)


// --------- เฉลย ------------------------------------------------------
// let result = []

// for(let index in alphabets){
//     if(alphabets[index] === 'a'){
//         result.push(index)
//     }
// }

// console.log(result)


// ---------------------เฉลย 2------------------------------

let result = []
let foundIndex= alphabets.indexOf('a')

do{
    if(foundIndex !== -1){
        result.push(foundIndex)
        foundIndex = alphabets.indexOf('a',foundIndex+1)
    }
    
}while(foundIndex !== -1)

console.log(result)

