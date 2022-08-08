// input : sell
// output : point
function calPoint(sell) {
    let point = Math.floor(sell/100);
    return point;
}

console.log(calPoint(204));
console.log(calPoint(199));
console.log(calPoint(99));
console.log(calPoint(300));