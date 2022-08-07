function calPrice() {
    let productName = prompt('Enter product name');
    let qty = prompt('Enter Qty');
    let unitPrice = prompt('Enter the unit price');
    let discount = prompt('Enter %discount');
    let price;
    let result = {};

        if(discount == 0 || discount == null || discount.trim() == ''){
            result.productName = productName;
            result.qty = qty;
            result.price = unitPrice*qty;
        }else{
            result.productName = productName;
            result.qty = qty;
            result.discount = discount + '%';
            // ราคาที่ต้องจ่ายจริง = ราคาเต็ม x (100 - จำนวนส่วนลด) ÷ 100
            result.price = (unitPrice * (100 -discount) / 100) * qty;
        }
    return result;
}
console.log(calPrice());