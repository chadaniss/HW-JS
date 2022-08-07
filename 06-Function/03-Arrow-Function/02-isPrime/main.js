const checkPrime = num => {
    let isPrime = true;
    for(let i  = 2; i < num; i++){
         if(num%i===0) {
            isPrime = false;
            break;
        }
    }
    return isPrime;
}
console.log(checkPrime(19)); // T
console.log(checkPrime(4)); // F
console.log(checkPrime(61)); // T
