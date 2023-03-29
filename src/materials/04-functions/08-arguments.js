// Псевдомассив arguments и Array.from и...

// // Старий метод Array.from(arguments)
// const fn = function () {
//     console.log(arguments);

//     // for (const arg of arguments) {
//     //     console.log(arg);
//     // }

//     const args = Array.from(arguments);
//     console.log(args);
// };

// fn(1, 2, 3);
// fn(1, 2, 3, 4, 5);
// fn(1, 2, 3, 4, 5, 6, 7);

// // Новий метод Array.from(arguments) 
// const fn = function (a, b, c, ...args) {
//     console.log(`${a} ${c} ${b}`);
//     console.log(args);
// }

// fn('hello', 2, 3);
// fn(1, 2, 3, 4, 5);
// fn(1, 2, 3, 4, 5, 6, 7);

// Напиши функцию add ДЛЯ сложения произвольного количества аргументов(чисел)
//     - Array from()
//     - Операция ... (rest)

// const add = function (...args) {
//     console.log(args);
//     let total = 0;

//     for (const arg of args) {
//         total += arg;
//     }

//     return total;
// };

// console.log(add(1, 2, 3));
// console.log(add(1, 2, 4, 5, 6));


// Напиши функцию filterNumbers(array[, number1, ...]) которая:
//     - первым аргументом принимает массив чисел
//     - после первого аргумента может быть произвольное количество других
// аргументов которые будут числами.
//     - Функция должна вернуть новый массив, в котором будут только
//     те аргументы, начиная CO второго,
//     ДЛЯ которых есть аналог в оригинальном массиве.


// const filterNumbers = function (array, ...args) {
//     // console.log('array: ', array);
//     // console.log('args: ', args);
//     const firstArray = array;
//     // console.log('firstArray: ', firstArray);
//     const secondArray = args;
//     // console.log('secondArray: ', secondArray);
//     const uniqueElements = [];


//     for (const element of firstArray) {
//         // console.log(element);
//         if (secondArray.includes(element)) {
//             uniqueElements.push(element);
//             // console.log(`${element} common element`);
//         }
//     }
//     return uniqueElements;
//  };

// console.log(filterNumbers([1, 2, 3, 4, 5], 10, 15, 2, 3, 8)); // [2, 3]
// console.log(filterNumbers([10, 15, 25, 30], 23, 30, 18, 15)); // [30, 15]
// console.log(filterNumbers([110, 200, 300, 400, 500], 7, 12, 200, 64)); // [200]