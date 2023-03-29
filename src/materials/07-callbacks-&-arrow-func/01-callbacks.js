// Функция обратного вызова (callback)
// - Функция может принимать другие функции как параметры
// - Функция которая передаеться другой функции как аргумент называеться
//   "функцией обратного (отложеного) вызова"(callback - функцией)
// - Функция которая принимает другую функцию как параметр или возращает
//   функцию как результат своей работы называеться "функцые высшего порядка"

// const fnA = function (message, callback) {
//   console.log(message);
//   console.log(callback);
//   callback(100);
// };

// const fnB = function (number) {
//   console.log('This os log when you call fnB', number);
// };

// fnA('dsad', fnB);

// функция doMatn(a, b, callback)

// const doMath = function (a, b, callback) {
//   const result = callback(a, b);
//   console.log(result);
// };

// const add = function (x, y) {
//   return x + y;
// };

// const sub = function (x, y) {
//   return x - y;
// };

// doMath(2, 3, add);
// doMath(2, 3, sub);

// // тип записи - Литерал, инлайн функция
// doMath(2, 3, function (x, y) {
//   return x + y;
// });
// doMath(2, 3, function (x, y) {
//   return x - y;
// });

// Отложенный вызов: регистрация событий

// const buttonRef = document.querySelector('.js-button');
// console.log(buttonRef);

// const handleBtnClick = function () {
//   console.log('Click on Button');
// };

// buttonRef.addEventListener('click', handleBtnClick);

// // тип записи - инлайн функция

// buttonRef.addEventListener('click', function () {
//   console.log('Click on Button');
// });

// ========================================================================================================

// Отложенный вызов: геолокация

// const onGetPositionSuccss = function (position) {
//   console.log('This is call onGetPositionSuccss');
//   console.log(position);
// };
// const onGetPositionError = function (error) {
//   console.log('This is call onGetPositionError');
//   console.log(error);
// };

// window.navigator.geolocation.getCurrentPosition(
//   onGetPositionSuccss,
//   onGetPositionError
// );

// Отложенный вызов: интервалы
// const callback = function () {
//   console.log('Через 3 секунды внутри колбека в таймауте');
// };

// console.log('В коде перед таймаутом');

// setTimeout(callback, 3000);

// console.log('В коде после таймаута');

// отложенный вызов: http-запрос
// - API URL: https://pokeapi.co/api/v2/pokemon

// const onRequestSuccess = function (response) {
//   console.log('Call function onRequestSuccess after succes response backend');
//   console.log(response);
// };

// fetch('https://pokeapi.co/api/v2/pokemon')
//   .then(res => res.json())
//   .then(onRequestSuccess);

// console.log('Before fetch');
// console.log('After fetch');

// ========================================================================================================

// // Фильтр

// const filter = function (array, test) {
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

// 1. Надо переделать функцию
// 2. Функция получает елемент массива
// 3. Если елемент массива удовлетворяет условию, то функция вернет true
// 4. Если елемент массива НЕ удовлетворяет условию, то функция вернет false

// const callback1 = function (value) {
//   return value >= 3;
// };
// const r1 = filter([1, 2, 3, 4, 5], callback1);
// console.log(r1);

// const callback2 = function (value) {
//   return value <= 4;
// };
// const r2 = filter([1, 2, 3, 4, 5, 6, 7, 8], callback2);
// console.log(r2);

// ========================================================================================================

// // Test FRUITS

// // Фильтр

// const filter = function (array, test) {
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

// const fruits = [
//   { name: 'apples', quantity: 200, isFresh: true },
//   { name: 'grapes', quantity: 150, isFresh: false },
//   { name: 'bananas', quantity: 100, isFresh: true },
// ];

// const getFruitsWithQuantity = function (fruit) {
//   return fruit.quantity >= 120;
// };

// const r3 = filter(fruits, getFruitsWithQuantity);
// console.log(r3);
