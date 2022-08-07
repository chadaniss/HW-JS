function sumUnlimit (...nums) {
    let result = 1;
    for(let num of nums){
        result *= num;
    }
    return result;
}
console.log(sumUnlimit(2,3,4,5));
