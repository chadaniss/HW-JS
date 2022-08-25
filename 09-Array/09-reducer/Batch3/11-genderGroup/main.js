const persons = [
  { name: 'John', sex: 'M' },
  { name: 'Jody', sex: 'M' },
  { name: 'Susan', sex: 'F' },
  { name: 'Kate', sex: 'F' },
  { name: 'Sid', sex: 'M' },
];
// expexted result: { M: ['John', 'Jody', 'Sid'], F: ['Susan', 'Kate'] }

let result = persons.reduce((acc, item) => {
  if (acc[item.sex]) {
    acc[item.sex].push(item.name);
  } else {
    acc[item.sex] = [item.name];
  }

  return acc;
}, {});
console.log(result); //?
