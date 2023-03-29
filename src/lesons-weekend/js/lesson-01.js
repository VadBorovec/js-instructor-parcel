//  Задача 1 ==============================================================================
/**
 *?     Используя функцию if...else,
 *?     напишите код, который будет спрашивать:
 *?     "Какое официальное название JavaScript?"
 *?     Если пользователь вводит "ECMAScript",
 *?     то показать через alert: "Верно!"
 *?     в противном случае отобразить:"Не знаете? ECMAScript!"
 */

/** 1. Треба прийняти те що ввів користувач
 * 2. Звірити це з умовою
 * 3. видати відповідь
 */
// let whatSayUser = prompt('Яка офіційна назва JavaScript?');
// if (whatSayUser === 'ECMAScript') {
//   alert('Вірно!');
// } else {
//   alert('Не знаєте! ECMAScript!');
// }

//Задача 2 =================================================================

/**
 *?      Напишите программу, которая получит от пользователя
 *?      число (количество минут) и выведет в консоль
 *?      строку в формате часов и минут
 *?      https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
 *?      70 === 01:10
 */

// const minutes = prompt(`Ввести число`);
// const hours = String(Math.floor(minutes / 60)).padStart(2, 0);
// console.log('hours: ', hours);

// const mins = String(minutes % 60).padStart(2, 0);
// console.log('minutes: ', mins);

// console.log(`${hours}:${mins}`);

//  Задача 3 ====================================================================================

/**
 *?     При помощи цикла for сложите все четные числа от  min до max
 */

// const max = 6;
// const min = 0;
// let summ = 0;

// for (let i = min; i <= max; i += 1) {
//     if (i % 2 === 0) {
//         summ += i; 
//     }
// }
// console.log(summ);

// Задача 4 ======================================================================================

/**
*?      Напишите код, который будет спрашивать
*?      логин с помощью prompt и логировать результат
*?      в консоль браузера
    
*?      Если посетитель вводит "Админ",
*?      то prompt запрашивает пароль.
*?      Если ничего не ввели или нажата клавиша Esc
*?      вывести строку "Отменено"
*?      В противном случае вывести строку "Я вас не знаю"
    
*?      Пароль проверять так:
*?      Если введён пароль "Я главный",
*?      то вывести строку "Здравствуйте!"
*?      иначе выводить строку "Неверный пароль!"
 */

// const userLogin = prompt('Введите логин').trim();
// if (userLogin === 'Админ') {
//     const password = prompt('Введите пароль');
//     const message = password === 'Я главный'
//         ? 'Здравствуйте!'
//         : 'Неверный пароль!';
//     alert(message);
// } else if (userLogin === null || userLogin === '') {
//     console.log('Отменено');
// } else {
//     console.log('Я вас не знаю');
// }

//  АБО

// const userLogin = prompt('Введите логин');

// console.log(userLogin);
// if (userLogin === "Админ") {
//   const userPassword = prompt("Введите пароль");
//   if (userPassword === "Я главный") {
//     console.log("Здравствуйте");
//   } else {
//     console.log("Неверный пароль");
//   }
// } else if (!userLogin) {
//   console.log("Отменено");
// } else {
//   console.log("Я вас не знаю");
// }

//=================================================
/**
 *? При загрузке страницы пользователю предлагается
 *? в prompt ввести число. Ввод добавляется к значению
 *? переменной total.
 *? Операция ввода числа продолжается до тех пор,
 *? пока пользователь не нажмет кнопку Cancel в prompt.
 *? После того как пользователь прекратил ввод нажав на
 *? кнопку Cancel, показать alert со строкой "Общая сумма 
 введенных чисел равна [число]."
 
 *! Делать проверку,что пользователь ввел именно число,
 *! а не произвольный набор символов, не нужно.
 */

// let total = 0;
// let number = Number(prompt('Enter number'));
// do {
//     if (number) {
//         total += number;
//         number = Number(prompt('Enter number'));
//     }
// } while (number); // while (total); те саме що й while (userLogin === null || userLogin === '');
// console.log('Sum of numbers is: ', total);

// АБО

// let inputValue = prompt('Enter number');
// let check = false;
// let total = 0;

// do {
//     if (inputValue) {
//         check = true;
//         total += Number(inputValue);
//         inputValue = prompt('Enter number');
//     } else {
//         check = false;
//         alert(`Sum of numbers is ${total}`);
//     }
// } while (check);