function sayHi(age) {
    if (age < 12) alert("Hi kid");
  }
  console.log(sayHi); // * fn sayHi > this log fn 
  console.log(sayHi(10)); // **alert Hi kid but not return, So log = undefined



  function sayHi(name) {
    if (name) {
      alert("Hi " + name);
      return;  // return : undefined
    } else {
      return "Who are you";
    }
  }
  console.log(sayHi("John")); // ***alert : John and returm : undefined
  console.log(sayHi()); // **** "Who are you"