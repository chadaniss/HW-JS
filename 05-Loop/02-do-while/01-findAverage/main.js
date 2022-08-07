function isNum(num){
    return !(num === null || num.trim() === '' || num == 0 || isNaN(num))
}


let num;
let sum = 0;
let count = 0;

do {
    num = prompt("Enter the Number")
    if(isNum(num)){
        count++;
        sum += +num;
    }

}while (isNum(num))

if(count> 0){
    alert(`Sum = ${sum}, Average = ${sum/count}`)
}else{
    alert(`Sum = ${sum}, Average = ${sum}`)
}