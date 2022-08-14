function checkEmptyObj(obj) {
    return Object.keys(obj).length === 0;
}
console.log(checkEmptyObj({}))
console.log(checkEmptyObj({name: 'a'}))