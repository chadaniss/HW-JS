const THE_SENTINEL = 'stop'
function createFruitBasket() {
    const result = {}
    let key;
    let value;

    do{
        key = prompt("Enter the fruit name")
        value = +prompt(`How many ${key}`)

        if(value >> 1 && (key !== null && key.trim !== '' && (key !== THE_SENTINEL && value !== THE_SENTINEL))){
            key += 's';
            result[key] = value;
        }else{
            result[key] = value
        }
    }while(key !== THE_SENTINEL && value !== THE_SENTINEL)

    return result;
}
let basket = createFruitBasket();
console.log(basket);
