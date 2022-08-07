const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
console.log(beasts.indexOf('bison')); // *1
console.log(beasts.indexOf('bison', 2)); // **4 เริ่มหาจาก index 2
console.log(beasts.indexOf('giraffe')); // *** -1 คือหาไม่เจอ
