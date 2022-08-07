let arr = [3.24, 2.78, 3.86, 1.37, 0.52];


function findMaxMin(array){
    const initailValue = {
        max : arr[0],
        min : arr[0]
    }

    let summary = arr.reduce((acc,item) => {

        // check max
        if(acc.max < item){
            acc.max = item
        }
        // check min
        if(acc.min > item) {
            acc.min = item
        }
        return acc;
    },initailValue)
    return summary;
}

findMaxMin(arr) //?