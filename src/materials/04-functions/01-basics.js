// Функции:
//     - Функциональные выражения
//     - Аргументы и параметры
//     - Возврат значения

// const add = function (x=1, y=5) {
//     console.log('Виконується функція add');
//     console.log(x);
//     console.log(y);
//     return x + y;
// }
// add(5, 8);

// const r1 = add(5, 8);
// console.log('r1 :', r1);
 
// const r2 = add(25, 28);
// console.log('r2 :', r2);

// add(r1, r2);

// const fn = function (value) {
//     console.log(1);
//     console.log(2);
//     if (value < 50) {
//         return 'менше ніж 50';
//     }
//     return 'більше ніж 50';
// }
// console.log('Result of function :', fn(10));
// console.log('Result of function :', fn(1000));


// //     - Стек ВЫЗОВОВ
// //     - Stack trace и поиск ошибок

// const fnA = function () {
//     console.log('В Выполняется функция A');
//     fnB();
// }
// const fnB = function () {
//     console.log('Выполняется функция B');
//     fnC();
// }
// const fnC = function () {
//     console.log('Выполняется функция C');
// }

// console.log('Лог перед вызовом функции A');
//     fnA();
// console.log('Лог после вызова функции A');

// console.log('Лог перед вызовом функции B');
//     fnB();
// console.log('Лог после вызова функции B');

// console.log('Лог перед вызовом функции C');
//     fnC();
// console.log('Лог после вызова функции C');
