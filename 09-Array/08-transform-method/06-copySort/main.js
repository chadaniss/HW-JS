let arr = ['React', 'Vue', 'Angular'];
let sorted = copySorted(arr);

// console.log(sorted); // Angular, React, Vue
// console.log(arr); // React, Vue, Angular (no changes)

function copySorted(arr){
    const clone = [...arr]
    return clone.sort() // fn sort will sort string in defult.
}

console.log(sorted);
console.log(arr);