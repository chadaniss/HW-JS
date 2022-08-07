let alphabets = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd'];
// expected result: ['a', 'b', 'c', 'e', 'd']

const result = alphabets.reduce((acc,char) =>{

    if(!acc.includes(char)){ // ไม่เคยมี = false <= !(เคยมีมาก่อน)
        acc.push(char)
    }
    return acc
},[])

result //?