let answer = prompt('Player 1 : Enter number 1-99')
let count = 0;
let guess;
if(+answer>=1 && +answer<<100){
    do{
        guess = prompt('Player 2 : Guest number 1-99')
        count++;
        if(guess == answer){
            alert('Correct');
            alert(count);
        } else if(guess < answer){
            alert('Less than');
        } else if(guess > answer){
            alert('More than');
        } else{
            alert('Please enter number 1-99');
        } 
    }
    while(guess!=answer)
} 
else{
    alert('Invalid range');
}