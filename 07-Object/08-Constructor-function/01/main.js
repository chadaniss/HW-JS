function Calculator () {
    this.number1 = 0
    this.number2 = 0

    this.Read = function() {
        this.number1 = +prompt('Enter number 1');
        this.number2 = +prompt('Enter number 2');
    },
    this.Sum = function() {
        return this.number1 + this.number2;
    },
    this.Mul = function() {
        return this.number1 * this.number2;
    }

}
const cal = new Calculator();
// cal.Read();
// cal.Mul();
// cal.Sum();
console.log(cal.Read());
console.log(cal.Mul());
console.log(cal.Sum());







