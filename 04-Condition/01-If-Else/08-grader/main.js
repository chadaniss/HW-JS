function checkNumber (num){
    return !(num === null || num ===  '' || num.trim() === '' || isNaN(num));
}
let grade = prompt('Enter your score 1-100');
if (checkNumber(grade)){
    if ((grade>=0) && (grade<=100))
        if(grade >= 80)
            alert('A')
        else if((grade>=70) && (grade<=79))
            alert('B')
        else if((grade>=60) && (grade<=69))
            alert('C')
        else if((grade>=50) && (grade<=59))
            alert('D')
        else
        alert('F')
    else
        alert('Pls enter score 1-100')
}
else
    alert('Please enter score in number only')