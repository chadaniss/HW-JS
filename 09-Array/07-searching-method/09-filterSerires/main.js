// const array = [9, 17, 23, 5];
// // ค่าที่มากกว่า 10
// const resultNum = array.filter(function(item,index,array){

//     if(item > 10){
//         return true // เอา item นั้น
//     }else{
//         return false // ไม่เอา item นั้น
//     }
// })
// console.log(resultNum)

// ------------------------------ข้อ 2----------------------------------------

// const array = [1, 2, 3, 4];
// // ค่าที่เป็นเลขคี่
// const resultNum = array.filter((item,index,array) => item%2 !== 0)
// console.log(resultNum)

// ------------------------------ข้อ 3------------------------------------------

// const array = [1, '1', 2, {}];
// // ค่าที่ประเภทข้อมูลเป็น Number
// const resultNum = array.filter((item) => typeof(item) === 'number')
// console.log(resultNum)

// ------------------------------ข้อ 4------------------------------------------

// const array = ['apple', 'banana', 'orange', 'pineapple', 'watermeon'];
// // ค่าที่มีตัวอักษรมากกว่า 6 ตัว
// const resultFruit = array.filter((item) => item.length >6)
// console.log(resultFruit)
// console.log(array) // array เก่ายังอยู่ดี 

// ------------------------------ข้อ 5------------------------------------------

// const array = [1, -3, 2, 8, -4, 5];
// // ค่าที่เป็นเลขบวก

// ------------------------------ข้อ 6------------------------------------------

// const array = [1, 3, 4, 5, 6, 7, 8];
// // ค่าที่หาร 3 ลงตัว

// ------------------------------ข้อ 7------------------------------------------

// const array = ['Elephant', 'Ant', 'Cat', 'Eagle', 'Zebra'];
// // ค่าที่ขึ้นต้นด้วยตัว E
// const resultArr = array.filter..

// ------------------------------ข้อ 8------------------------------------------

// const array = ['APPLE', 'oRanGE', 'PEACH', 'PaPAYA'];
// // ค่าที่เป็นตัวพิมพ์ใหญ่ทั้งหมด
// const resultArr = 


// ------------------------------ข้อ 9------------------------------------------

// const array = ['Krabi', 'Chonburi', 'Buriram', 'Saraburi','Phrae'];
// // ค่าที่มีคำว่า buri เป็นส่วนประกอบโดยไม่สนใจตัวพิมพ์เล็กหรือตัวพิมพ์ใหญ่
// const resultArr = array.filter((item) => item.toLocaleLowerCase().includes('buri'))
// console.log(resultArr)

// ------------------------------ข้อ 10------------------------------------------

// const array = [
//     { name: 'Ben', age: 14 },
//     { name: 'Phil', age: 18 },
//     { name: 'John', age: 32 },
//     { name: 'Ann', age: 16 },
//     { name: 'Paul', age: 24 }
//   ];
//   อายุไม่น้อยกว่า 18 

// ------------------------------ข้อ 11------------------------------------------

// const array = [
//     { id: 1, name: 'Pepsi' },
//     { id: 2, name: 'Mirinda' },
//     { id: 3, name: 'Coke' },
//     { id: 4, name: 'Fanta' },
//     { id: 5, name: 'Sprite' }
//   ];
//   // id ไม่เท่ากับ 4
  
// ------------------------------ข้อ 12------------------------------------------

  const array = [
    { name: 'John', birth: '2001-07-31' },
    { name: 'Jack', birth: '1990-06-24' },
    { name: 'Jim', birth: '1984-12-13' },
    { name: 'Jeff', birth: '1996-02-05' },
    { name: 'Joe', birth: '2002-06-13' }
  ];
  // เกิดเดือน 6
  const resultArr = array.filter((item) => {
    let month = item.birth.slice(5,7)
    if(month === '06')
  })
  console.log(resultArr)