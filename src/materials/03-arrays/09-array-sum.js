// написати скрипт який рахує суму елементів 2ох масивів

// // Bad decision
// const array1 = [5, 10, 15, 20];
// const array2 = [10, 20, 30];
// let total = 0;

// for (let i = 0; i < array1.length; i += 1) {
//     total += array1[i];
// }
// console.log(total);

// for (let i = 0; i < array2.length; i += 1) {
//     total += array2[i];
// }
// console.log(total);

// // Good decision
// const array1 = [5, 10, 15, 20];
// const array2 = [10, 20, 30];
// let total = 0;

// const numbers = array1.concat(array2);
// console.log(numbers);
// for (const number of numbers) {
//     total += number; 
// }
// console.log(total);