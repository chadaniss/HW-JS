/* 
input : null
output : Object (until input == 'stop')
*/
const THE_SENTINEL = 'stop' // เผื่อเหตุการที่ผู้ใช้อยากเปลี่ยนคำ จะได้ไม่ต้องเปลี่ยนหลายที่
function createObj() {
    const result = {}
    // modified Object
    let key;
    let value;

    // ใช้ do เพราะต้องรันอย่างน้อย 1 ครั้ง
    do{ 
        key = prompt("Enter the key")
        value = prompt("Enter the value")
        if(key !== null && key.trim !== '' && (key !== THE_SENTINEL && value !== THE_SENTINEL)){ // update ได้ > คือ stop อาจจะเข้า loop แต่เรามาดักตรงนี้เพื่อไม่ให้ค่าอัพเดต
            result[key] = value;
        }
    }while(key !== THE_SENTINEL && value !== THE_SENTINEL)

    return result;
}

console.log(createObj());

