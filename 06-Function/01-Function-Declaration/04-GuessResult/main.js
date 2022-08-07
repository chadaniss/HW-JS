function sayHi(name) { // this mean let name
    let name = "Guest"; // this line dosen't have let name again
    console.log(name); // * Error
  }
  
  sayHi("Jim");