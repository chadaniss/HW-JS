// input : Obj, number
// output : Obj (modified only number by multiple)

/* check each key w/ value
    if value type number
        update value by multiply for that key 
    else
        don't update == stay the same
return modified obj
*/ 

let menu = {
    width: 200,
    height: 300,
    title: 'My menu'
  };

  const multiplyNumeric = (obj,num) => {
    const result = {} // สร้าง obj เปล่าๆมาเพื่อ clone obj เดิม > ไม่ทำให้ obj global พัง
    for(let key in obj){
        let currentValue = obj[key]
        if(typeof currentValue === 'number'){
            result[key] = currentValue*num // will add key and result || adding propoty
        } else {
            result[key] = currentValue
        }
    }
    return result
  }
  
console.log(multiplyNumeric(menu,3))
console.log(menu) // same original.