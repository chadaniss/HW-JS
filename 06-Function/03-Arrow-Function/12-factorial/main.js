const calFact = num => {
    let result = 1;
    for(let i=1; i<=num; i++){
        result *= i;
    }
    return result;
}
console.log(calFact(3))
console.log(calFact(4))
console.log(calFact(5))