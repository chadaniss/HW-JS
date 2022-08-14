// const arrayInt = [1, 2, 30, 400];
// // result: [2, 4, 60, 800]
// const resultInt = arrayInt.map(function(item,index,arr){
//     return item*2
// })
// console.log(resultInt)

// ----------------------------ข้อ 2--------------------------------

// const array = [1, 2, 3, 4];
// // result: ["1", "2", "3", "4"]
// const result = array.map((item) => String(item))
// console.log(result)

// ----------------------------ข้อ 3--------------------------------

// const array = [1, '1', 2, {}];
// // result: ["number", "string", "number", "object"]
// const result = array.map(item => typeof(item))
// console.log(result)

// ----------------------------ข้อ 4--------------------------------

// const array = ['apple', 'banana', 'orange'];
// // result: ["APPLE", "BANANA", "ORANGE"]
// const result = array.map(item => item.toUpperCase())
// console.log(result)

// ----------------------------ข้อ 5--------------------------------

// const array = [1, 3, 4, 5, 6, 7, 8];
// // result: ["odd", "odd", "even", "odd", "even", "odd", "even"]
// const result = array.map(item => item%2==0 ? 'even' : 'odd')
// console.log(result)

// ----------------------------ข้อ 6--------------------------------

// const array = [1, -3, 2, 8, -4, 5];
// // result: [1, 3, 2, 8, 4, 5]
// const result = array.map(item => Math.abs(item))
// console.log(result)

// ----------------------------ข้อ 7--------------------------------

// const array = [100, 200.25, 300.84, 400.3];
// // result: ["100.00", "200.25", "300.84", "400.30"]
// const result = array.map(item => item = String(item.toFixed(2)))
// console.log(result)

// ----------------------------ข้อ 8--------------------------------

// const array = [0, 5, 10, 7, 6, 5, 0];
// // result: ["Jan", "Jun", "Nov", "Aug", "Jul", "Jun", "Jan"]
// const Month = ["Jan", "Feb", "Mar", "Apr", "May","Jun", "Jul", "Aug", "Sep", "Oct","Nov","Dec"]
// const result = array.map(item => Month[item])
// console.log(result)

// ----------------------------ข้อ 9--------------------------------

// const array = [1, 16, 81, 256, 625, 1296];
// // result: [1, 2, 3, 4, 5, 6]
// const result = array.map(item => Math.sqrt(Math.sqrt(item)))
// console.log(result)

// ----------------------------ข้อ 10--------------------------------

// const array = [
//   { name: 'apple', age: 14 },
//   { name: 'banana', age: 18 },
//   { name: 'watermelon', age: 32 }
// ];
// // result: ["apple", "banana", "watermelon"]
// const result = array.map(item => item.name)
// console.log(result)

// ----------------------------ข้อ 11--------------------------------

// const array = [
//   { name: 'apple', age: 14 },
//   { name: 'banana', age: 18 },
//   { name: 'watermelon', age: 32 }
// ];
// // result: [14, 18, 32]
// const result = array.map(item => item.age)
// console.log(result)

// ----------------------------ข้อ 12--------------------------------

// const array = [
//   { name: 'apple', surname: 'London' },
//   { name: 'banana', surname: 'Bangkok' },
//   { name: 'watermelon', surname: 'Singapore' }
// ];
// // result: ["apple London", "banana Bangkok", "watermelon Singapore"]
// const result = array.map(item => item.name + ' ' + item.surname)
// console.log(result)

// ----------------------------ข้อ 13--------------------------------

// const array = [
//   { name: 'apple', birth: '2000-01-01' },
//   { name: 'banana', birth: '1990-10-01' },
//   { name: 'watermelon', birth: '1985-12-01' }
// ];
// // // result: [
// // //   { name: "apple", birth: "2000-01-01", age: 21 },
// // //   { name: "banana", birth: "1990-10-01", age: 31 },
// // //   { name: "watermelon", birth: "1985-12-01", age: 36 },
// // // ]
// const CURRENT_YEAR = '2021'
// const result = array.map(item => {
//     let age = CURRENT_YEAR - item.birth.slice(0,4)
//     return {...item,age:age} 
// })
// console.log(result)

// ----------------------------ข้อ 14--------------------------------

const array = [
  { name: 'apple', birth: '2000-01-01' },
  { name: 'banana', birth: '1990-10-10' },
  { name: 'watermelon', birth: '1985-12-30' }
];
// // result: [
// //     "<tr><td>apple</td><td>01 jan 2000</td></tr>",
// //     "<tr><td>banana</td><td>10 oct 1990</td></tr>",
// //     "<tr><td>watermelon</td><td>30 dec 1985</td></tr>",
// // ]
const Month = ["Jan", "Feb", "Mar", "Apr", "May","Jun", "Jul", "Aug", "Sep", "Oct","Nov","Dec"]

const display = array.map(function(item){
    let name = item.name
    let date = item.birth.slice(-2)
    let month = item.birth.slice(5,7)
    let monthName = Month[month-1].toLowerCase()
    let year = item.birth.slice(0,4)

    return `<tr><td>${name}</td><td>${date} ${monthName} ${year}</td></tr>`
})
console.log(display)
