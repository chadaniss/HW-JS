let arr = ["a", "b"];

arr.push(function() {
  alert(this);
})

arr[2](); // * this == arr => alert : arr ออกมา