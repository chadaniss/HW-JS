const arr = [
    { name: 'John', age: 25 },
    { name: 'Leon', age: 26 },
    { name: 'Mick', age: 29 },
    { name: 'Pete', age: 30 },
    { name: 'Mary', age: 28 }
  ];

//   Less => More
// a > b will swap : (a-b > 0)

console.log(arr.sort((a,b) => (a.age - b.age)))