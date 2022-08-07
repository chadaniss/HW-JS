let number = prompt('Enter the number');
let sum = 0;
while(number){
    let jumpNumber = number % 10;
    number = (number - jumpNumber) / 10;
    sum += jumpNumber;
}
alert(sum);