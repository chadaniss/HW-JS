let leapYear = year => {
    if(year%100===0){
        return year%400===0;
    }
    return year%4===0;
}

let calDayFromBD = birthYear => {
    let day=0
    
    //  count Year
    for(let i=birthYear; i<=2020; i++){
        if(leapYear(i)){
            day += 366;
        }else day+=365;
    }
    return day
}
console.log(calDayFromBD(2019)) // 365+366 = 731