let str = 'I live in Thailand';
// expected result: {i: 4, l: 2, v: 1, e:1, n: 2, t: 1, h:1, a:2, d:1}

/*
step 1 : lowercase
step 2 : split by ""
*/

let lowercase = str.toLowerCase()
const arrChar = lowercase.split("")

const result = arrChar.reduce(function(acc,char){
    if(char.trim() !== ""){
        // let foundValue = acc[char]
        // if(foundValue){
        //     acc[char] += 1
        // } else {
        //     acc[char] = 1
        // }
        
        acc[char] = acc[char] ? acc[char] + 1 : 1
    }

    return acc

},{})
result //?