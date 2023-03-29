// # Модуль 4. Заняття 8. Перебираючі методи масиву

// ## Колекція об'єктів для всіх прикладів з автомобілями

// ```js
const cars = [
  {
    make: 'Honda',
    model: 'CR-V',
    type: 'suv',
    amount: 14,
    price: 24045,
    onSale: true,
  },
  {
    make: 'Honda',
    model: 'Accord',
    type: 'sedan',
    amount: 2,
    price: 22455,
    onSale: true,
  },
  {
    make: 'Mazda',
    model: 'Mazda 6',
    type: 'sedan',
    amount: 8,
    price: 24195,
    onSale: false,
  },
  {
    make: 'Mazda',
    model: 'CX-9',
    type: 'suv',
    amount: 7,
    price: 31520,
    onSale: true,
  },
  {
    make: 'Toyota',
    model: '4Runner',
    type: 'suv',
    amount: 19,
    price: 34210,
    onSale: false,
  },
  {
    make: 'Toyota',
    model: 'Sequoia',
    type: 'suv',
    amount: 16,
    price: 45560,
    onSale: false,
  },
  {
    make: 'Toyota',
    model: 'Tacoma',
    type: 'truck',
    amount: 4,
    price: 24320,
    onSale: true,
  },
  {
    make: 'Ford',
    model: 'F-150',
    type: 'truck',
    amount: 11,
    price: 27110,
    onSale: true,
  },
  {
    make: 'Ford',
    model: 'Fusion',
    type: 'sedan',
    amount: 13,
    price: 22120,
    onSale: true,
  },
  {
    make: 'Ford',
    model: 'Explorer',
    type: 'suv',
    amount: 6,
    price: 31660,
    onSale: false,
  },
];
console.table(cars);
// ```

// console.table(cars);

// ## Example 1 - Метод map

// Нехай функція `getModels` повертає масив моделей (поле model) всіх
// автомобілів.

// // ```js
// const getModels = cars => cars.map(car => car.model);

// console.table(getModels(cars));
// // ```

// ## Example 2 - Метод map

// Нехай функція `makeCarsWithDiscount` повертає новий масив об'єктів із змінним
// значенням властивості `price` залежно від переданої знижки.

// // ```js
// const makeCarsWithDiscount = (cars, discount) =>
//   cars.map(car => ({ ...car, price: car.price * (1 - discount) }));

// console.table(makeCarsWithDiscount(cars, 0.2));
// console.table(makeCarsWithDiscount(cars, 0.4));
// // ```

// ## Example 3 - Метод filter

// Нехай функція `filterByPrice` повертає масив автомобілів ціна яких менша
// ніж значення параметра `threshold`.

// // ```js
// const filterByPrice = (cars, threshold) =>
//   cars.filter(car => car.price < threshold);

// console.table(filterByPrice(cars, 30000));
// console.table(filterByPrice(cars, 25000));
// // ```

// ## Example 4 - Метод filter

// Нехай функція `getCarsWithDiscount` повертає масив автомобілів властивість
// onSale яких true.

// // ```js
// const getCarsWithDiscount = cars => cars.filter(car => car.onSale);

// console.table(getCarsWithDiscount(cars));
// // ```

// ## Example 5 - Метод filter

// Нехай функція `getCarsWithType` повертає масив автомобілів тип яких
// збігається зі значенням параметра `type`.

// // ```js
// const getCarsWithType = (cars, type) => cars.filter(car => car.type === type);

// console.table(getCarsWithType(cars, 'suv'));
// console.table(getCarsWithType(cars, 'sedan'));
// // ```

// ## Example 6 - Метод find

// // ```js
// const getCarByModel = (cars, model) => cars.find(car => car.model === model);

// console.log(getCarByModel(cars, 'F-150'));
// console.log(getCarByModel(cars, 'CX-9'));
// // ```

// ## Example 7 - Метод sort

// Нехай функція `sortByAscendingAmount` повертає новий масив автомобілів відсортований за
// зростанням значення якості `amount`.

// // ```js
// const sortByAscendingAmount = cars =>
//   [...cars].sort((a, b) => a.amount - b.amount);

// console.table(sortByAscendingAmount(cars));

// // ===================================

// const arr = [1, 5, 2, 22, 11, 38, 65, 34];
// // // arr.sort();
// arr.sort((a, b) => a - b);
// console.log(arr);

// console.log('2'.charCodeAt(0));
// console.log('*'.charCodeAt(0));
// console.log('a'.charCodeAt(0));
// console.log('A'.charCodeAt(0));
// // ```

// ## Example 8 - Метод sort

// Нехай функція `sortByDescendingPrice` повертає новий масив автомобілів
// відсортований за зменшенням значення властивості `price`.

// // ```js
// const sortByDescendingPrice = cars =>
//   [...cars].sort((a, b) => b.price - a.price);

// console.table(sortByDescendingPrice(cars));
// // ```

// ## Example 9 - Метод sort

// Нехай функція `sortByModel` повертає новий масив автомобілів відсортований
// за назвою моделі в алфавітному та зворотному алфавітному порядку, в залежності від
// значення параметра `order`.

// // ```js
// // SWITCH CASE
// const sortByModel = (cars, order) =>
//   [...cars].sort((a, b) => {
//     switch (order) {
//       case 'asc':
//         return a.model.localeCompare(b.model);
//       case 'desc':
//         return b.model.localeCompare(a.model);
//     }
//   });

// // TERNAR
// const sortByModel = (cars, order) =>
//   [...cars].sort((a, b) =>
//     order === 'asc'
//       ? a.model.localeCompare(b.model)
//       : b.model.localeCompare(a.model)
//     );

// // IF...ELSE
// const sortByModel = (cars, order) =>
//   [...cars].sort((a, b) => {
//     if (order === 'asc') {
//       return a.model.localeCompare(b.model);
//     } else if (order === 'desc') {
//       return b.model.localeCompare(a.model);
//     } else {
//       return 'Not valid';
//     }
//   });

// console.table(sortByModel(cars, 'asc'));
// console.table(sortByModel(cars, 'desc'));
// console.table(sortByModel(cars, 'sd'));
// // ```

// ## Example 10 - Метод reduce

// Нехай функція `getTotalAmount` повертає загальну кількість автомобілів (значення
// властивостей `amount`).

// // ```js
// const getTotalAmount = cars =>
//   cars.reduce((total, { amount }) => total + amount, 0);

// console.log(getTotalAmount(cars));
// // ```

// ## Example 11 - Ланцюжки методів

// Нехай функція `getAvailableCarNames` повертає масив моделей автомобілів, але
// тільки тих, які зараз на розпродажі.

// // ```js
// // const getModelsOnSale = cars => cars.filter(car => car.onSale === true);

// // same result
// const getModelsOnSale = cars =>
//   cars.filter(({ onSale }) => onSale).map(({ model }) => model);

// console.table(getModelsOnSale(cars));
// // ```

// ## Example 12 - Ланцюжки методів

// Нехай функція `getSortedCarsOnSale` повертає масив автомобілів на розпродажі
// (Властивість onSale), відсортованих за зростанням ціни.

// // ```js
// const getSortedCarsOnSale = cars =>
//   cars.filter(({ onSale }) => onSale).sort((a, b) => a.price - b.price);

// console.table(getSortedCarsOnSale(cars));
// // ```

// // ==========================
// // REDUCE  METHOD. RETURN SUM OF ARRAY

// const arr = [1, 5, 3, 7, 235, 84];

// // const sum = arr.reduce((acc, number) => {
// //   acc += number;
// //   return acc;
// // }, 0);

// // REFACT
// const sum = arr.reduce((acc, number) => acc + number, 0);

// // 1. arr.reduce((acc = 0, number = 1) => 0 + 1 = 1, 0);
// // 2. arr.reduce((acc = 1, number = 5) => 1 + 5 = 6, 1);
// // 3. arr.reduce((acc = 6, number = 3) => 6 + 6 = 9, 6);
// // 4. arr.reduce((acc = 9, number = 7) => 9 + 7 = 16, 9);
// // 5. arr.reduce((acc = 16, number = 235) => 16 + 235 = 251, 16);
// // 6. arr.reduce((acc = 251, number = 84) => 251 + 84 = 335, 251);
// // acc = 335

// console.log(sum);
// // ==========================
