// Функция результатом своей работы может возврашать другую функцию.

// Возвращаемая функция BO время вызова будет иметь доступ
// KO всем локальным переменным (области видимости)
// родительской функции (той из которой ее вернули),
// это называется «замыкание».

// const fnA = function (parameter) {
//   const innerVariable = 'Значение внутренней переменной функции fnA';
//   const innerFunction = function () {
//     console.log(parameter);
//     console.log(innerVariable);
//     console.log('This is call innerFunction');
//   };
//   return innerFunction;
// };

// const fnB = fnA(555);
// fnB();
// console.log(fnB);

// ========================================================================================================

// Поварёнок

// const makeDish = function (sheffName, dish) {
//   console.log(`${sheffName} готовит ${dish}`);
// };

// makeDish('Mango', 'пирожок');
// makeDish('Mango', 'омлет');
// makeDish('Mango', 'чай');

// makeDish('Poly', 'котлеты');
// makeDish('Poly', 'soup');
// makeDish('Poly', 'кофе');

// const makeSheff = function (name) {
//   const makeDish = function (dish) {
//     console.log(`${name} готовит ${dish}`);
//   };
//   return makeDish;
// };

// const mango = makeSheff('Mango');
// const poly = makeSheff('Poly');

// mango('котлеты');
// mango('пирожок');
// poly('чай');

// ========================================================================================================

// Округлятор

// const floatingPoint = 3.456789;
// const someInt = Math.round(floatingPoint); // 3
// const withDecimals = Number(floatingPoint.toFixed(2)); // 3.46

// const rounder = function (number, places) {
//   return Number(number.toFixed(places));
// };

// console.log(rounder(3.515, 2));
// console.log(rounder(1.5250504415, 3));
// console.log(rounder(4.504415, 2));
// console.log(rounder(7.0504415, 3));

// const rounder = function (places) {
//   return function (num) {
//     return Number(num.toFixed(places));
//   };
// };

// const rounder2 = rounder(2);
// const rounder3 = rounder(3);

// console.log(rounder2(3.515));
// console.log(rounder3(1.5250504415));
// console.log(rounder2(4.504415));
// console.log(rounder3(7.0504415));

// ========================================================================================================

// Приватные данные и функции - скрытие реализации, интерфейс

// const salaryManagerFactory = function (employeeName, baseSalary = 0) {
//   let salary = baseSalary;

//   return {
//     raise(amount) {
//       salary += amount;
//     },
//     lower(amount) {
//       salary -= amount;
//     },
//     current() {
//       return `Текущая зарпалата ${employeeName} - ${salary}`;
//     },
//   };
// };

// const salaryManager = salaryManagerFactory('Mango', 5000);

// console.log(salaryManager.current());
// console.dir(salaryManager.current);
// console.dir(salaryManagerFactory);

// salaryManager.raise(1000);
// console.log(salaryManager.current());
