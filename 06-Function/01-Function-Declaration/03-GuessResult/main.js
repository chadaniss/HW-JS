let message = "Welcome to Thailand"; // This Global

function logMessage(message) { // this massagg is Local variable
  message = "Hello everybody";
  console.log(message); // *Hello everybody
}

logMessage(message); // Should use value of Global var
console.log(message); // **Welcome to Thailand



let name = "John";

function sayHi(input) {
  console.log(name); // ***John เนื่องจากไม่เจอ name in Local
  name = input; // name = undefined เพราไม่ได้ส่งอะไรเข้ามา
}

sayHi();
console.log(name); // ****undefined