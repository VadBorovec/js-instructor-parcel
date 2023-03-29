// Написати скрипт який підраховує суму всіх парних чисел в масиві

// // Через FOR

// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 11];
// // 1 Змінна тотал
// let total = 0;
// // 2 перебрати масив
// for (let i = 0; i < numbers.length; i += 1) {
//     const number = numbers[i];
//     console.log(number);
//     // 3 перевірити на партність через остаток від ділення
//     if (number % 2 === 0) {
//         console.log('Парне');
//         // 4 якщо партне, додаємо до тоталу
//         total += number;
//     }
// }
// console.log('Total even :', total);

// Через FOR.. OF

// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 11, 28, 14, 55];
// // 1 Змінна тотал
// let total = 0;
// // 2 перебрати масив
// for (let number of numbers) {
//     // console.log(number);
//     // 3 перевірити на партність через остаток від ділення
//     if (number % 2 === 0) {
//         console.log(`${number} - Парне`);
//         // 4 якщо партне, додаємо до тоталу
//         total += number;
//     }
// }
// console.log('Total even :', total);

// // Через FOR.. OF логіка від зворотного

// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 11, 28, 14, 55, 23];
// let total = 0;
// for (let number of numbers) {
//     if (number % 2 !== 0) {
//         console.log('Цю ітерацію потрібно пропустити', number);
//         continue;
//     }
//     console.log(`${number} - Парне`);
//     total += number;
// }
// console.log('Total even :', total);