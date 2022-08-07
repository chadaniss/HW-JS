function filterOutOdds(...nums) {
    for(let num of nums){
        if(num%2==0){
            return nums.filter(num);
        }
    }
}
console.log(filterOutOdds(1,2,3,4,5,6,7,8,9))

