let result="";
for(let i=2; i<=12 ; i++){
    for(let j=1; j<=12 ; j++){
        result+=(`${i} x ${j} = ${i*j}\n`)
    }
    console.log(result)
    result=""; // for reset result (เมื่อขึ้นแม่ใหม่)
}