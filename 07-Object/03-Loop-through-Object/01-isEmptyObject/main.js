//  input : Object ที่ใช้ตรวจสอบ
// output : true == Object ว่าง (ไม่มี key) , false == Object นั้นมีอย่างน้อย 1 key

function isEmptyObject (obj) {
    // เข้า for loop เมื่อ Obj มี 1 key ขึ้นไป
    for(let key in obj){
        return false  // only 1 key come in loop will break ทันที by return > false
    }
    return true // เฉพาะ 0 key เท่านั้นที่จะ true = Empty Obj.
}

const user_1 = {name : "JOB"}
const user_2 = {name : "JOB", pet : 'Cat'}
const user_3 = {}

console.log (isEmptyObject(user_1)) // false
console.log (isEmptyObject(user_2)) // false
console.log (isEmptyObject(user_3)) // true
console.log (isEmptyObject({})) // true
console.log (isEmptyObject({name : "JOB", pet : 'Cat'})) // on the fly?? // false