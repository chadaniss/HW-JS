const arr = [1,2,3,4,5,6,7,8,9,10]
// filterRange(arr,5,8) => [5,6,7,8]

function filterRange(arr, lowerBound, upperBound) {
    let newArr = arr.slice(lowerBound-1,upperBound)
    return newArr;
}
console.log(filterRange(arr,5,8));
console.log(filterRange(arr,2,6));
console.log(filterRange(arr,1,5));

