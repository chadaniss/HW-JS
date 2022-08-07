// end 1 year
// balance = 100k
// newBalance = 100k + (100k x (2.5/100)) = 100k x 2500

//  2 year
// balance = 102,500

let balance = 100000
for (let i=0; i<10; i++){
    balance += balance*(2.5/100)
}
console.log(balance.toFixed(2))