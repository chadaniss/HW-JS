let number = +prompt('Enter number');
let count=0;
while(number){
    let rightDigit = number % 10;
    number = (number - rightDigit) / 10;
    count++;
}
alert(count);

