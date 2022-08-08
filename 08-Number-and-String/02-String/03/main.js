function ucFirst(str) {
    let newStr = str.trim();
    let firstChar = newStr[0];
    let rightStr = newStr.slice(1);

    return firstChar.toUpperCase() + rightStr;
}

console.log(ucFirst("hello it's me")) // Hello it's me
console.log(ucFirst("     hello   me")) // Hello   me