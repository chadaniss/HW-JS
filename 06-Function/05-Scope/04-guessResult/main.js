let x = 1;
function func() {
  console.log(x); // * error but x=1
  let x = 2; // error from this line / let again
}
func();