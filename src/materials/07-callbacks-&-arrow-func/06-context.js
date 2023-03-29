// Контекст стрелки

// Контекст внутри стрелки определяется местом ее объявления, a не вызова,
// и с сылается на контекст родительской функции.

// const showThis = () => {
//   console.log('this in showThis: ', this);
// };

// showThis(); // this in showThis: window

// const user = { name: 'Mango' };
// user.showContext = showThis;

// user.showContext(); // this in showThis: window

// const user = {
//   fullName: 'Mango',
//   showName() {
//     console.log('this: ', this);
//     console.log('this.fullName: ', this.fullName);

//     const inner = () => {
//       console.log('this is inner: ', this);
//     };

//     inner();
//   },
// };

// user.showName();

// ======================================================================

// // Стрелки как методы объекта - НИКОГДА НЕ ИСПОЛЬЗОВАТЬ

// const user = {
//   fullName: 'Mango',
//   showName: () => {
//     console.log('this: ', this);
//     console.log('this.fullName: ', this.fullName);
//   },
// };

// user.showName();

// //  bind тоже не работает

// const boundShowName = user.showName.bind(user);

// boundShowName();

// Еще раз - стрелка ка метод обьекта

// const objA = {
//   x: 5,
//   showX() {
//     console.log('this in objA.showX: ', this);
//     console.log(this.x);

//     const objB = {
//       y: 10,
//       showThis() {
//         console.log('this in objB.showThis: ', this);
//       },
//     };

//     objB.showThis();
//   },
// };

// objA.showX();

// // а со стрелочной функцией

const objA = {
  x: 5,
  showX() {
    console.log('this in objA.showX: ', this);
    console.log(this.x);

    const objB = {
      y: 10,
      showThis: () => {
        console.log('this in objB.showThis: ', this);
      },
    };

    objB.showThis();
  },
};

objA.showX();
