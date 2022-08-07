function checkSearch(str) {
    let LowerStr = str.toLowerCase()

    return (LowerStr.includes('xxx') || LowerStr.includes('sex') || LowerStr.includes('porn'))
}
console.log(checkSearch("sEx"))
console.log(checkSearch("pOrN"))
console.log(checkSearch("xxX"))
console.log(checkSearch("xxl"))
console.log(checkSearch("p0rn"))