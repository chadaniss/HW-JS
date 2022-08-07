// ให้ input = obj -> output = sum of salaries (number)

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  };

let calSalaries = function(obj){
    let sum = 0

    for(let key in obj){
        let currenSalaries = obj[key] // จะเท่ากับ obj.John, obj.Ann, obj.Pete มาทีละตัว หรือเท่ากับ obj['John'], obj['Ann'], obj['Pete']
        sum += currenSalaries // คือ sum += obj[key]
    }
    return sum
}

console.log (calSalaries(salaries))