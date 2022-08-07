const sales = [
    { price: 1000, discount: 0.1 },
    { price: 500, discount: 0.05 },
    { price: 100 }
  ];

//   ตัวอย่างผลลัพธ์
//   const summary = [
//     { netPrice: 900 }, 
//     { netPrice: 475 },
//     { netPrice: 100 }
//   ];

function calSummary(salesArr) {
    const sumArr = []

    for(let item of salesArr){
        let currentObj = {};
        let netPrice;

        if(item.discount) {
            netPrice = item.price * (1 - item.discount)
        }else{
            netPrice = item.price;
        }

        currentObj.netPrice = netPrice;
        sumArr.push(currentObj)
    }
    return sumArr;
}

console.log(calSummary);

// F12 : Don't work