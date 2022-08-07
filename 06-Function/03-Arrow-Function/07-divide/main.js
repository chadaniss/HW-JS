let checkDiv7 = num => {
    // if(num%7==0){
    //     return true
    // }
    // return false

    //#2
    // return num%7===0 ? true : false ;

    // #3
    return num%7===0;
}
console.log(checkDiv7(54))
console.log(checkDiv7(63))

//  #4
const DivSeven = num => num%7===0