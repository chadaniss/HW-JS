// leap year is 366 days

// let leapY = year => {
//     if(year%4===0){
//         if(year%100===0 && year%400===0){
//         return true
//         }else return false
//     }
//     return false 
// }
// console.log(leapY(36))



// #2
let leapYear = year => {
    if(year%100===0){
        return year%400===0;
    }
    return year%4===0;
}
console.log(leapYear(16))
console.log(leapYear(1996))
console.log(leapYear(2000))
console.log(leapYear(1900))