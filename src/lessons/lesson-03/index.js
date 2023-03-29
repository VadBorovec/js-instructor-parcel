// # Модуль 2. Заняття 3. Масиви

// ## Example 1 - Базові операції з масивом

// 1. Створіть масив `genres` з елементами «Jazz» та «Blues».
// 2. Додайте «Рок-н-рол» до кінця.
// 3. Виведіть у консоль перший елемент масиву.
// 4. Виведіть у консоль останній елемент масиву. Код повинен працювати для масиву
//    довільної довжини.
// 5. Видаліть перший елемент та виведіть його в консоль.
// 6. Вставте «Country» та «Reggae» на початок масиву.

// ```js
// // 1. Створіть масив `genres` з елементами «Jazz» та «Blues».
// const genres = ['«Jazz»', '«Blues»'];
// // 2. Додайте «Рок-н-рол» до кінця.
// genres.push('«Рок-н-рол»');
// // 3. Виведіть у консоль перший елемент масиву.
// console.log(genres[0]);
// // 4. Виведіть у консоль останній елемент масиву.
// console.log(genres[genres.length - 1]);
// // 4. Виведіть у консоль останній елемент масиву.
// const genresNew = String(genres.slice(genres.length - 1));
// console.log(genresNew);
// // 5. Видаліть перший елемент та виведіть його в консоль.
// console.log(genres.shift());;
// console.log(genres);
// // 5. ! Видаліть ОСТАННІЙ елемент та виведіть його в консоль.
// console.log(genres.pop());;
// console.log(genres);
// // 6. Вставте «Country» та «Reggae» на початок масиву.
// genres.unshift('«Country»', '«Reggae»');
// console.log(genres);
// // ```

// ## Example 2 - Масиви та рядки

// Напиши скрипт для обчислення площі прямокутника зі сторонами, значення
// яких зберігаються у змінній `values` у вигляді рядка. Значення гарантовано
// розділені пробілом.

// ```js
// const values = '12 11';
// const valuesArr = values.split(' ');
// const result = Number(valuesArr[0]) * Number(valuesArr[1]);
// console.log(result);
// ```

// ## Example 3 - Перебір масиву

// Напиши скрипт для перебору масиву `fruits` циклом `for`. Для кожного елемента
// масиву виведи в консоль рядок у форматі `номер_елемента: значення_елемента`.
// Нумерація елементів повинна починатися з `1`.

// ```js
// const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];

// // через цикл for
// for (let i = 0; i < fruits.length; i++) {
//     console.log(`${i + 1} : ${fruits[i]}`);
// }

// через цикл for...of
// for (let element of fruits) {
//     const i = fruits.indexOf(element);
//     console.log(`${i + 1} : ${fruits[i]}`);
// }

// ```

// ## Example 4 - Масиви та цикли

// Напиши скрипт, який виводить у консоль ім'я та телефонний номер користувача. У
// змінних `names` та `phones` зберігаються рядки імен та телефонних номерів,
// розділені комами. Порядковий номер імен та телефонів у рядках вказують на
// відповідність. Кількість імен та телефонів гарантовано однакова.

// ```js
// const names = 'Jacob,William,Solomon,Artemis,Artemis2';
// const phones = '89001234567,89001112233,890055566377,890055566300';

// const namesArr = names.split(',');
// const phonesArr = phones.split(',');

// for (const name of namesArr) {
//     const i = namesArr.indexOf(name);
//     console.log(name, phonesArr[i]);
// }
// ```

// ## Example 5 - Масиви та рядки

// Напиши скрипт, який виводить у консоль усі слова рядка крім першого і
// останнього. Результуючий рядок не повинен починатися або закінчуватися
// символ пробілу. Скрипт повинен працювати для будь-якого рядка.

// ```js
// const string = 'Welcome to the three four future';

// const words = string.trim().split(' ');
// console.log(words);
// const result = words.slice(1, -1).join(' ');
// console.log(result);

// // АБО - НЕ ДОРОБЛЕНА ДО КІНЦЯ!!!!!!!!!
// let words2 = string.trim().split(' ');
// console.log(words2);
// for (let i = 1; i < words2.length - 1; i++) {
//     const result2 = words2[i];
//     console.log(result2);    
// }
// ```

// ## Example 6 - Масиви та рядки

// Напиши скрипт, який «розгортає» рядок (зворотний порядок букв) і виводить
// його в консоль.

// ```js
// const string = 'Welcome to the future';
// const reversedString = string.split('').reverse().join('');
// console.log(reversedString);
// ```

// ## Example 7 - Сортування масиву із циклом

// Напиши скрипт сортування масиву рядків в алфавітному порядку за першою літерою
// елемента.

// ```js
// const langs = ['python', 'javascript', 'c++', 'haskel', 'php', 'ruby'];

// console.log(langs.sort());
// // Сортування в зворотньому порядку
// console.log(langs.sort().reverse());
// ```

// ## Example 8 - Пошук елемента

// Напиши скрипт пошуку найменшого числа у масиві. Код повинен працювати для
// будь-якого масиву чисел. Використовуй цикл для розв'язання задачі.

// ```js
// const numbers = [2, 17, 94, 1, 23, 37];
// let min = numbers[0];
// console.log('Firstly min: ', min); // 1

// for (let i = 0; i < numbers.length; i++) {
//     if (i < min) {
//         min = numbers[i];
//     }
// }

// console.log('Finally min: ', min); // 1
// ```