const product1 = {
    name: 'Water',
    distributor: {
      name: 'Giraffe Water Company',
      address: {
        street: 'Phetchaburi',
        subdistrict: 'Thanonphetchaburi',
        district: 'Ratchathewi',
        province: 'Bangkok'
      }
    }
  };

  console.log(product1.distributor.address.province)

const product2 = {}
// console.log(product2.distributor.address.province) // error ; crash
// console.log(product2.distributor.address) // เท่ากับว่า undefined.address == crash
console.log(product2.distributor?.address) // changing dot when before ? is Object
//  console.log(undefined.address)

console.log(product2.distributor?.address?.province) // undefined is OK.