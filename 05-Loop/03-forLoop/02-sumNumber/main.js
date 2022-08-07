let sumAll = 0;
let sumEven = 0;
let sumOdd = 0;
let sqr2 = 0;
let sqr3 = 0;

for(let i = 1; i <= 100; i++){
    sumAll += i; // หาผลรวมตัวเลขทุกตัว

    if(i%2 == 0){
        sumEven += i;
        sqr2 += (i**2);
    } 

    if(i%2==1){
        sumOdd += i;
    } 

    if(i%3 == 0){
        sqr3 += (i**2);
    }
}
    

console.log(`Sum = ${sumAll}, Sum evn = ${sumEven}, Sum odd = ${sumOdd}, Diff sqr = ${sqr2 - sqr3}`) 