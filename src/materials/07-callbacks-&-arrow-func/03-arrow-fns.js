// Стрелочные функции
// - Обьявление
// - Явный и неявний возврат
// - Аргументы
// - Неявный возврат обьекта

// const add = function (a, b, c) {
//   console.log(a, b, c);
//   return a + b + c;
// };

// const addArrow = (a, b, c) => {
//   console.log(a, b, c);
//   return a + b + c;
// };

// // OR (НЕ ЯВНЫЙ ВОЗВРАТ) НЕТ RETURN ЕСЛИ 1 СТРОКА
// // const addArrow = (a, b, c) => a + b + c;

// console.log(add(5, 10, 15));
// console.log(addArrow(2, 4, 8));

// // В стрелочних функциях не arguments, нужно использовать распиление
// const showArgs = (...args) => console.log(args);

// console.log(showArgs(5, 10, 15));

// ================================================================

// const fnA = function () {
//   return {
//     a: 5,
//   };
// };

// console.log(fnA());

// // OR ARROW

// const arrowFnA = () => ({ arrowA: 5 });
// console.log(arrowFnA());

// =======================================================================

// // Отложенный вызов: геолокация

// const onGetPositionSuccss = position => {
//   console.log('This is call onGetPositionSuccss');
//   console.log(position);
// };
// const onGetPositionError = error => {
//   console.log('This is call onGetPositionError');
//   console.log(error);
// };

// window.navigator.geolocation.getCurrentPosition(
//   onGetPositionSuccss,
//   onGetPositionError
// );

// =======================================================================

// // Фильтр

// const filter = (array, test) => {
//   const filteredArray = [];

//   for (const el of array) {
//     console.log(el);
//     const passed = test(el);

//     if (passed) {
//       filteredArray.push(el);
//     }
//   }
//   return filteredArray;
// };

// // const callback1 = value => value >= 3;
// const r1 = filter([1, 2, 3, 4, 5], value => value >= 3);
// console.log(r1);

// // const callback2 = value => value <= 4;
// const r2 = filter([1, 2, 3, 4, 5, 6, 7, 8], value => value <= 4);
// console.log(r2);

// const fruits = [
//   { name: 'apples', quantity: 200, isFresh: true },
//   { name: 'grapes', quantity: 150, isFresh: false },
//   { name: 'bananas', quantity: 100, isFresh: true },
// ];

// // const getFruitsWithQuantity = fruit => fruit.quantity >= 120;
// const r3 = filter(fruits, fruit => fruit.quantity >= 120);
// console.log(r3);
