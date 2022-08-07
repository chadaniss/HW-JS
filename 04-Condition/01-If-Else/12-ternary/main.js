let grade = prompt('Enter your score 1-100');
let score = (grade >= 80) ? 'A' : ((grade>=70) && (grade<=79)) ? 'B' : ((grade>=60) && (grade<=69)) ? 'C' : ((grade>=50) && (grade<=59)) ? 'D' : 'F' ;
alert(score);