// Цикл for

// for (инициализация; условие; пост - выражение) {
//   // тело цикла
// }

// for (let i = 0; i < 5; i += 1) {
//     console.log(i);
// }

// console.log('Enother');

// Pre-increment и Post-increment - это гадость. не использовать!

// for (let i = 0; i < 10; i++ ) {
//     console.log(i);
// }

// let a = 100;
// const b = a++;

// console.log(a);
// console.log(b);

// Напиши скрипт который подсчитывает общую сумму зарплат работников.
// Кол-во работников хранится 8 перемнной employees.
// Зарплата каждого работника это случайное число от 500 ДО 5000
// Записать сумму в переменную totalSalary и вывести В консоль

// 1. Записати перемінні
const employees = 2;
const minSalary = 500;
const maxSalary = 5000;
let totalSalary = 0;
// 2. Перебрати працівників в циклі
for (let i = 0; i < employees; i += 1) {
    // 3. Згенерувати випадкову ЗП
    const salary = Math.round(Math.random() * (maxSalary - minSalary) + minSalary);
    console.log(`Salary employee ${i} - ${salary}`);
    // 4. Добавити до тоталу
    totalSalary += salary;
}  
// 5. Консоль Лог
console.log('totalSalary', totalSalary);

// Напиши скрипт который подсчитывает сумму всех чётных чисел,
// которые входят диапазон чисел в переменных от min до max.
// Например, если min = 0 и max = 5, TO диапазон 0 - 5, и В нём
// два чётных числа - 2 и 4, их сумма 6

// 1. Записати перемінні
// const min = 3;
// const max = 13;
// let total = 0;
// // 2. Перебрати числа з проміжку в циклі
// for (let i = min; i <= max; i += 1) {
//     // 3. Перевіряємо залишок від ділення
//     if (i % 2 === 0) {
//         console.log('парне', i);
//         // 4. Записуємо суму
//         total += i;
//     } 
// }
// // 5. Консоль Лог
// console.log('total', total);

// OR

const min = 0;
const max = 5;
let total = 0;
for (let i = min; i <= max; i += 1) {
    // 3. Пропкскаємо не парні
    if (i % 2 !== 0) {
        console.log('не парні', i);
        continue;
    }
    console.log('парне', i);
    total += i;
}
console.log('total', total);