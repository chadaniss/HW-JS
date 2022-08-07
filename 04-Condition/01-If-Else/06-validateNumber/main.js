function checkNumber (num){
    return !(num === null || num ===  '' || num.trim() === '' || isNaN(num));
}
let input1 = prompt('Enter first number');
let input2 = prompt('Enter secound number');
if (checkNumber(input1) && checkNumber(input2)){
    alert((input1*1)+(input2*1));
} else{
        alert('Invalid number');
    }
