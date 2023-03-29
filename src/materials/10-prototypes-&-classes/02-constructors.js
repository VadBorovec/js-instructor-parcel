// Основы ООП: класс. экземпляр (объект), интерфейс

// Функции-конструкторы
// - Именование
// - Оператор new
// - Свойство Function.prototype

// const Car = function (config = {}) {
//   const { brand, model, price } = config;
//   // 2. Функция вызывается В контексте созданного объекта,
//   // TO есть 8 this записывается ссылка на него
//   this.brand = brand;
//   this.model = model;
//   this.price = price;

//   //   this.changePrice = function (newPrice) {
//   //     this.price = newPrice;
//   //   };
//   // 4. Ссылка на обьект возвращается в место вызова new Car
// };

// Car.prototype.sayHi = function () {
//   console.log('Car prototype. sayHi - -> this', this);
//   console.log('Hello :) ');
// };
// Car.prototype.changePrice = function (newPrice) {
//   this.price = newPrice;
// };
// console.log(Car.prototype);

// // 1. Если функция вызывается через new, создаётся пустой объект
// const myCar = new Car({
//   brand: 'Audi',
//   model: 'Q3',
//   price: 35000,
// });

// console.table(myCar);

// myCar.sayHi();
// myCar.changePrice(88888);
// console.table(myCar);

// const myCar2 = new Car({
//   brand: 'BMW',
//   model: 'X6',
//   price: 50000,
// });
// console.table(myCar2);

// const myCar3 = new Car({
//   brand: 'Audi',
//   model: 'A6',
//   price: 65000,
// });
// console.table(myCar3);

// 1. Если функция вызывается через new, создаётся пустой объект
// 2. Функция вызывается в контексте созданного объекта,
//    тo есть в this записывается ссылка на него
// 3. В свойство this._proto_ записывается ссылка на обьект Car.prototype
//    тоесть Car.prototype это ПРОТОТИП будущего обьекта (экземпляра)
// 4. Ссылка на обьект возвращается в место вызова new Car

// // ===================================================

// const User = function ({ email, password } = {}) {
//   this.email = email;
//   this.password = password;
// };

// console.log(User.prototype);

// User.prototype.changeEmail = function (newMail) {
//   this.email = newMail;
// };

// const mango = new User({ email: 'mango@mail. com', password: 1111111 });

// console.table(mango);

// mango.changeEmail('my-new-mail@mail.com');
// console.table(mango);

// // Статистические свойства и методы
// // - Статистические свойства и методы доступны только на самом конструкторе
// // - В статистических методах не nuzhen this

// User.message =
//   'Я статическое свойство, меня нет на экземплярах или В прототипе.';
// User.logInfo = function (obj) {
//   console.log('User.logInfo -> obj', obj);
//   console.log('Почта: ', obj.email);
//   console.log('Пароль: ', obj.password);
// };

// User.logInfo(mango);

// Object.keys()
// Object.values()

// 1. y каждого обьекта есть свойство _proto
// 2. В этом свойстве лежит ссылка на его ПРОТОТИП, TO есть другой обьект
// 3. При создании литера обьекта, в свойство _proto_ записывается с сылка на Функция.ргоtotype
// 4. Функция-конструктор это просто функция :)
// 5. Всю магию делает оператор new
// 6. Если функция вызывается через new, создаётся пустой объект
// 7. Функция вызывается в контексте созданного объекта
// 8. В свойство this. _proto__ записывается ссылка на обьект Функция.prototype
// 9. Ссылка на обьект возвращается в место вызова new Фунукция()
