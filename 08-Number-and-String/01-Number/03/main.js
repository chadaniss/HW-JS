// input : sell
// output : point
function calPoint(sell) {
    let point = math.floor(sell/100);
    return point
}

console.log(calPoint(204));