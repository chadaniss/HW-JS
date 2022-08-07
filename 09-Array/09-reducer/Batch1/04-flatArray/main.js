let flattened = [
    [0, 1],
    [2, 3],
    [4, 5]
  ];

//   let result = flattened.reduce((acc,curr) => acc+',' + curr, '');
//   let arr = result.split(',');
//   console.log(arr) // Don't ok

// -----------เฉลย--------------

function flattArr(array) {
    let flattArr = array.reduce((acc,item,index) => {
        return acc.concat(item) //?
    }, [])
    return flattArr
    }
    console.log(flattArr(flattened)) //?
