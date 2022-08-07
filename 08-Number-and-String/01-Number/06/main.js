function randomNumberInrange(min,max) {
    let diff = Math.random() * (max-min)
        return (min+diff).toFixed(2);
}

console.log(randomNumberInrange(2,9))