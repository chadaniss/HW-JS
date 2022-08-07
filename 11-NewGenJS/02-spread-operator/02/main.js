const nums1 = [1, -2, 3, 4];
function newArr(arr){
    let clone = [...arr];
    clone[3]=arr[3]**2; //?
    return clone;
}
console.log(newArr(nums1)) //?
console.log(nums1) //?


// Sol#2 : splice
// Sol#3 : map