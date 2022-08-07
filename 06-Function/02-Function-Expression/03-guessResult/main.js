function magic() {
    return function (x) {
      return x * 42;
    };
  }
  const answer = magic();
  console.log(answer); // * fn()
  console.log(answer(1337)); // **56154
  console.log(magic(1337)(42)); // ***1764 > Equal console.log(magic()(42)) // x=42