// Функция это частный случай объекта -> ССЫЛОЧНЫЙ ТИП

// console.log('[] === []: ', [] === []);
// console.log('{} === {}: ', {} === {});
// console.log(
//   'function() {} === function() {}: ',
//   function () {} === function () {}
// );

// const fnA = function () {
//   console.log('hello');
// };
// const fnB = fnA;

// console.log('fnB === fnA: ', fnB === fnA);

// Контекст (this)
// - Где и как была объявлена функция НЕ ИМЕЕТ НИКАКОГО ВЛИЯНИЯ на контекст.
// - Контекст определяется В МОМЕНТ ВЫЗОВА ФУНКЦИИ, если он не привязан ЯВНО.

// Как метод объекта. В контексте объекта.

// const user = {
//   tag: 'Mango',
//   showTag() {
//     console.log('showTag -> this ', this);
//   },
// };

// user.showTag();

// Вызов без контекста
//  - в строгом режиме = undefined
//  - Не в строгом режиме = window

// const foo = function () {
//   console.log('fo -> this', this);
// };

// foo();

// Как метод объекта, но объявлена как внешняя функция.
// В контексте объекта.

// const showTag = function () {
//   console.log('showTag -> this', this);
//   console.log('showTag -> this. tag', this.tag);
// };

// showTag();

// const user = {
//   tag: 'Mango',
// };

// user.showUserTag = showTag;

// console.log('user', user);

// user.showUserTag();

// Вызов без контекста, но объявлена как метод объекта.

// const user = {
//   tag: 'Mango',
//   showTag() {
//     console.log('showTag -> this', this);
//     console.log('showTag -> this. tag', this.tag);
//   },
// };

// user.showTag();

// const outerShowTag = user.showTag;

// user.outerShowTag();

// Kontext in callback-functions

// const user = {
//   tag: 'Mango',
//   showTag() {
//     console.log('showTag -> this', this);
//     console.log('showTag -> this. tag', this.tag);
//   },
// };

// // user.showTag();

// // const xyz = user.showTag;

// // xyz();

// const invokeAction = function (action) {
//   console.log(action);
//   action();
// };

// invokeAction(user.showTag);

// =====================================================================

// Traning

// const fn = function () {
//   console.log('fn -> this', this);
// };

// fn();

// =====================================================================

// Traning 2

// const book = {
//   title: 'React for beginners',
//   showThis() {
//     console.log('showThis -> this', this);
//   },
//   showTitle() {
//     console.log('showTitle -> this.title', this.title);
//   },
// };

// book.showThis(); // Какой this ???

// const outerShowThis = book.showThis;
// outerShowThis(); // Какой this ???

// const outerShowTitle = book.showTitle;
// outerShowTitle(); // Какой this ???

// =====================================================================

// Traning 3

// const makeChangeColor = function () {
//   const changeColor = function (color) {
//     console.log('changeColor -> this', this);
//     // this.color = color;
//   };

//   changeColor(); // Какой this ???

//   const sweater = {
//     color: 'teal',
//   };

//   sweater.updateColor = changeColor;

//   sweater.updateColor('red'); // Какой this ???

//   return sweater.updateColor;
// };

// const swapColor = makeChangeColor();

// swapColor('blue'); // Какой this ???

// =====================================================================

// Traning 4

// const makeChangeColor = function () {
//   const changeColor = function (color) {
//     console.log('changeColor -> this', this);
//   };

//   return changeColor;
// };

// makeChangeColor();

// const updateColor = makeChangeColor();
// updateColor('yellow');

// const hat = {
//   color: 'blue',
//   updateColor,
// };

// hat.updateColor('orange');

// =====================================================================

// Traning 5

// const counter = {
//   value: 0,
//   increment(value) {
//     // console.log('increment -> this', this);
//     this.value += value;
//   },
//   decrement(value) {
//     console.log('decrement -> this', this);
//     this.value -= value;
//   },
// };

// // const updateCounter = function (value, operation) {
// //   operation(value);
// // };

// // updateCounter(10, counter.increment);
// // updateCounter(5, counter.decrement);
