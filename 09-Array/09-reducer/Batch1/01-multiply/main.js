const nums = [-3, 2, 11, -7, 4, 6];

let result = nums.reduce((sum,current) => sum*current, 1); // ระวัง : ค่าตั้งต้นถ้าเป็น 0 จะคูณไม่ได้
console.log(result)