function Accumulator(startingValue) {

    this.currentValue = startingValue
    this.show = function() {
        alert(this.currentValue)
    }
    this.read = function() {
        let newInput = +prompt("Enter number")
        this.currentValue += newInput;
    }
}

const Acc1 = new Accumulator(0)
const Acc2 = new Accumulator(5)
const Acc3 = new Accumulator(37)

Acc1.read()
Acc1.show()

console.log(Acc1)
console.log(Acc2)
console.log(Acc3)

