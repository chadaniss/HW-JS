Math.random(); // มีค่า [0,1)
[1,2,3,4,5,6]
Math.random() * Array.length // [0,Arr.length)
Math.floor(Math.random() * Array.length) // 0,1,2, ... , Arr.length-1

const arr = [1,2,3,4,5,6]
function removeRandom(input) {
    return (Math.floor(Math.random() * input.length));
}
removeRandom(arr); //?