// function camelCase (dash) {
//     let arr = dash.split('-');
//     let result = arr.map((item,index) => {
//         if (index>0) {
//             return item[0].toUpperCase() + item.slice(1)
//         } else {
//             return item;
//         }
//     }).join('')
//   return result;
//   }
//   console.log(camelCase('background-color'));

  function camelCase (dash){
    let arr = dash.split('-');
    let result = arr.map((item,index) => index>0 ? item[0].toUpperCase() + item.slice(1) : item).join('')
    return result;
  }
  console.log(camelCase('background-color'));
  console.log(camelCase('background-color-summer'));