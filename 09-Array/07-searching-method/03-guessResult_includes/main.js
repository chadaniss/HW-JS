console.log([1, 2, 3].includes(2)); // *T
console.log([1, 2, 3].includes(4)); // **F
console.log([1, 2, 3].includes(3, 3)); // ***F : find start ตน.3
console.log([1, 2, 3].includes(3, -1)); // ****T
console.log([1, 2, NaN].includes(NaN)); // *****T
console.log(['1', '2', '3'].includes(3)); // ******F