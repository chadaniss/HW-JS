function max(a,b,c,d){
    // case1 : ไม่ใส่ไรเลย
    if(a===undefined){
        return undefined;
    }

    // case2 : ใส่แค่ a
    if(b===undefined){
        return a;
    }

    // case3 : ใส่แค่ a,b
    if(c===undefined){
        return a>b ? a : b;
    }
    
    // case4 : ใส่แค่ a,b,c
    if(d===undefined){
        return Math.max(a,b,c);
    }

    // case5 : ใส่ครบ
    return Math.max(a,b,c,d);

}

console.log(max())
console.log(max(9))
console.log(max(9,400))
console.log(max(9,300,23))
console.log(max(9,400,23,98))