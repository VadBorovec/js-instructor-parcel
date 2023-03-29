// //  call & apply

// const showThis = function (a, b, c) {
//   console.log(a, b, c);
//   console.log('showThis -> this', this);
// };

// console.log(showThis);

// console.dir(showThis);

// showThis();

// const objA = {
//   a: 5,
//   b: 10,
// };

// showThis.call(objA, 10, 20, 30);
// showThis.apply(objA, [30, 40, 50]);

// const objB = {
//   x: 42,
//   y: 56,
// };

// showThis.call(objB, 1, 1, 2);
// showThis.apply(objB, [4, 6, 2]);
// showThis(objB);

// const changeColor = function (color) {
//   console.log('changeColor -> this', this);
//   this.color = color;
// };

// const hat = {
//   color: 'black',
// };

// // changeColor.call(hat, 'orange');

// // console.log(hat);

// const sweater = {
//   color: 'green',
// };

// changeColor.call(sweater, 'blue');

// console.log(sweater);

// ==============================================================
// bind

// const changeHatColor = changeColor.bind(hat);
// const changeSweaterColor = changeColor.bind(sweater);

// changeHatColor('yellow');
// changeSweaterColor('red');

// console.log('hat', hat);
// console.log('sweater', sweater);

// =====================================================================

// Counter

// const counter = {
//   value: 0,
//   increment(value) {
//     console.log('increment -> this', this);
//     this.value += value;
//   },
//   decrement(value) {
//     console.log('decrement -> this', this);
//     this.value -= value;
//   },
// };

// const updateCounter = function (value, operation) {
//   operation(value);
// };

// updateCounter(10, counter.increment.bind(counter));
// updateCounter(5, counter.decrement.bind(counter));

// console.log(counter); // 0 -> increment 10 -> decrement 5 = 5
