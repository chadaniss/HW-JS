// input : 
// output : ทศนิยม 2 ตำแหน่ง

function calFixedDecimal(num) {
    num = num*100;
    num = (Math.trunc(num))/100;
    return num.toFixed(2);
}

console.log(calFixedDecimal(99.8321))
console.log(calFixedDecimal(20))
console.log(calFixedDecimal(3.1289))