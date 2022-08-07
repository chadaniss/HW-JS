let names = ['Jack', 'John', 'Bill', 'John', 'Rick', 'Bill', 'John'];
// expected result: {Jack: 1, John: 3, Bill: 2, Rick: 1}

/*
input : array
but output : object
*/

let result = names.reduce(function(acc,item,index,array) {
    
    // let currentKey = acc[item]
    // if(!currentKey){ // ถ้าเป็น !undefined == !false == true จะเซ็ตค่าแรกเป็น 1
    //     acc[item] = 1
    // } else{ // ถ้ามีค่าเดิมอยู่แล้วให้บวกเพิ่มไป 1
    //     acc[item] = acc[item] + 1
    // }

    acc[item] = acc[item] ? acc[item] + 1 : 1

    return acc;
},{})

result //?