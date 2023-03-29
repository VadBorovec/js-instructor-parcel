// # Модуль 5. Заняття 10. Прототипи та класи

// ## Example 1 - Блогер

// Напиши клас `Blogger` для створення об'єкта блогера з наступними властивостями:

// - `email` - пошта, рядок
// - `age` - вік, число
// - `numberOfPosts` - кількість постів, число
// - `topics` - масив тем на яких спеціалізується блогер

// Клас чекає один параметр - об'єкт налаштувань з однойменними властивостями.

// Додай метод `getInfo()`, який, повертає рядок:
// `User ${пошта} is ${вік} years old and has ${кількість постів} posts`.

// Додай метод `updatePostCount(value)`, який у параметрі `value` приймає
// кількість постів, які потрібно додати користувачеві.

// // ```js

// class Blogger {
//   constructor({ name, age, numberOfPosts, topics } = {}) {
//     this.name = name;
//     this.age = age;
//     this.numberOfPosts = numberOfPosts;
//     this.topics = topics;
//   }

//   getInfo() {
//     return `User ${this.name} is ${this.age} years old and has ${this.numberOfPosts} posts`;
//   }

//   updatePostCount(value) {
//     return (this.numberOfPosts += value);
//   }
// }

// const mango = new Blogger({
//   name: 'mango@mail.com',
//   age: 24,
//   numberOfPosts: 20,
//   topics: ['tech', 'cooking'],
// });

// console.log(mango);
// console.log(mango.getInfo()); // Blogger mango@mail.com is 24 years old and has 20 posts
// mango.updatePostCount(5);
// console.log(mango.getInfo()); // Blogger mango@mail.com is 24 years old and has 25 posts

// const poly = new Blogger({
//   name: 'poly@mail.com',
//   age: 19,
//   numberOfPosts: 17,
//   topics: ['sports', 'gaming', 'health'],
// });

// console.log(poly.getInfo()); // Blogger poly@mail.com is 19 years old and has 17 posts
// poly.updatePostCount(4);
// console.log(poly.getInfo()); // Blogger poly@mail.com is 19 years old and has 21 posts
// // ```

// ## Example 2 - Сховище

// Напиши клас `Storage` який створює об'єкти для керування складом товарів.
// При виклику отримуватиме один аргумент - початковий масив товарів і записуватиме
// його властивість `items`.

// Додай методи класу:

// - `getItems()` - повертає масив товарів.
// - `addItem(item)` - отримує новий товар і додає його до поточних.
// - `removeItem(item)` - отримує товар і, якщо він є, видаляє його з поточних.

// // ```js
// const storage = new Storage(['🍎', '🍋', '🍇', '🍑']);

// const items = storage.getItems();
// console.table(items); // [ '🍎', '🍋', '🍇', '🍑' ]

// storage.addItem('🍌');
// console.table(storage.items); // [ '🍎', '🍋', '🍇', '🍑', '🍌' ]

// storage.removeItem('🍋');
// console.table(storage.items); // [ '🍎', '🍇', '🍑', '🍌' ]
// // ```

// ## Example 3 - User

// Напиши клас `User` який створює об'єкт із властивостями `login` та `email`.
// Оголоси приватні властивості `#login` та `#email`, доступ до яких зроби через
// гетер та сетер `login` та `email`.

// ```js
// const mango = new User({
//   login: 'Mango',
//   email: 'mango@dog.woof',
// });

// console.log(mango.login); // Mango
// mango.login = 'Mangodoge';
// console.log(mango.login); // Mangodoge

// const poly = new User({
//   login: 'Poly',
//   email: 'poly@mail.com',
// });

// console.log(poly.login); // Poly
// poly.login = 'Polycutie';
// console.log(poly.login); // Polycutie
// ```

// ## Example 4 - Нотатки

// Напиши клас `Notes` який керує колекцією нотаток у властивості `items`.
// Замітка це об'єкт із властивостями `text` та `priority`. Додай класу статичну
// властивість `Priority`, у якому зберігатиметься об'єкт із пріоритетами.

// ```js
// {
//   LOW: 'low',
//   NORMAL: 'normal',
//   HIGH: 'high'
// }
// ```

// Додай методи `addNote(note)`, `removeNote(text)` та
// `updatePriority(text, newPriority)`.

// ```js
// const myNotes = new Notes([]);

// myNotes.addNote({ text: 'Моя перша замітка', priority: Notes.Priority.LOW });
// console.log(myNotes.items);

// myNotes.addNote({
//   text: 'Моя друга замітка',
//   priority: Notes.Priority.NORMAL,
// });
// console.log(myNotes.items);

// myNotes.removeNote('Моя перша замітка');
// console.log(myNotes.items);

// myNotes.updateNote('Моя друга замітка', Notes.Priority.HIGH);
// console.log(myNotes.items);
// ```

// ## Example 5 - Toggle

// Напишіть клас `Toggle` який приймає об'єкт налаштувань `{isOpen: boolean}` і
// оголошує одну властивість `on` - стан вкл/викл (true/false). За замовчуванням
// значення властивості `on` повинно бути `false`.

// ```js
// const firstToggle = new Toggle({ isOpen: true });
// console.group('firstToggle');
// console.log(firstToggle.on);
// firstToggle.toggle();
// console.log(firstToggle.on);
// console.groupEnd('firstToggle');

// const secondToggle = new Toggle();
// console.group('secondToggle');
// console.log(secondToggle.on);
// secondToggle.toggle();
// console.log(secondToggle.on);
// console.groupEnd('secondToggle');
// ```

// //==================================================================

// // STATUS PROPERTIES // PRIVATE FIELDS & METHODS

// class User {
//   static STATUS = {
//     admin: 'ADMIN',
//     user: 'USER',
//   };

//   #private;

//   constructor({ name, status } = {}) {
//     this.name = name;
//     this.status = status;
//     this.#private = 'This is private field';
//   }

//   getPrivate() {
//     return this.#private;
//   }

//   setPrivate(newValue) {
//     if (newValue === 'fooo') return;
//     this.#private = newValue;
//   }
// }

// // console.log(User.STATUS);

// const admin = new User({ name: 'Alex', status: User.STATUS.admin });
// const user = new User({ name: 'Oleg', status: User.STATUS.user });

// console.log(admin);
// console.log(user);

// // console.log(admin.name); // have access
// // console.log(admin.status); // have access
// // console.log(admin.#private); // no access - because `#private` is private field

// console.log(admin.getPrivate());
// admin.setPrivate('foo');
// console.log(admin.getPrivate());
// admin.setPrivate('other');
// console.log(admin.getPrivate());

// //==================================================================

// // INHERITANCE

// class Rectangle {
//   constructor({ height, width }) {
//     this.name = 'Rectangle';
//     this.height = height;
//     this.width = width;
//   }

//   calculateArea() {
//     return this.height * this.width;
//   }

//   sayHello() {
//     console.log(`Hello, I'm ${this.name}. My Area is ${this.calculateArea()}`);
//   }
// }

// class Square extends Rectangle {
//   constructor(length) {
//     super({ height: length, width: length });
//     this.name = 'Square';
//   }
// }

// const rectangle = new Rectangle({ height: 5, width: 10 });
// const square = new Square(5);
// console.log('rectangle: ', rectangle);
// console.log('square: ', square);
// console.log(rectangle.calculateArea());
// console.log(square.calculateArea());

// rectangle.sayHello();
// square.sayHello();
