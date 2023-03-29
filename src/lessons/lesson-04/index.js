// # Модуль 2. Заняття 4. Функції

// ## Example 1 - Індекс маси тіла

// Напиши функцію `calcBMI(weight, height)` яка розраховує та повертає
// індекс маси тіла людини. Для цього необхідно розділити вагу в кілограмах на
// квадрат висоти людини в метрах.

// Вага та висота будуть спеціально передані як рядки. Не цілі числа можуть бути задані у вигляді
// `24.7` або `24,7`, тобто як роздільник дробової частини
// може бути кома.

// Індекс маси тіла необхідно округлити до однієї цифри після коми;

// ```js
// function calcBMI(x, y) {
//     return Number(x.replace(',', '.') / y.replace(',', '.')**2).toFixed(1);
// }

// const bmi = calcBMI('88,3', '1.75');
// console.log(bmi); // 28.8
// ```

// АБО ChatCPT
// function calcBMI(weight, height) {
//   const weightInKg = parseFloat(weight.replace(',', '.'));
//   const heightInM = parseFloat(height.replace(',', '.')) / 100;
//   const bmi = weightInKg / (heightInM * heightInM);
//   return Math.round(bmi * 10) / 10;
// }

// const weight = '88,3';
// const height = '175,0';
// const bmi = calcBMI(weight, height);
// console.log(`BMI: ${bmi}`);

// ## Example 2 - Найменше з чисел

// Напиши функцію `min(a,b)`, яка повертає найменше з чисел `a` та `b`.

// ```js
// function min(a, b) {
//     let smallerNumber = a;
//     if (a > b) {
//         smallerNumber = b;
//     }
//     return smallerNumber;
// }

// // АБО ChatCPT
// function min(a, b) {
//   if (a < b) {
//     return a;
//   } else {
//     return b;
//   }
// }

// // АБО Тернарний оператор
// function min(a, b) {
//   return a < b ? a : b;
// }
// // Консоль ЛОГ
// console.log(min(2, 5)); // 2
// console.log(min(3, -1)); // -1
// console.log(min(1, 1)); // 1
// ```


// ## Example 3 - Площа прямокутника

// Напиши функцію `getRectArea(dimensions)` для обчислення площі прямокутника
// зі сторонами, значення яких будуть передані до параметра `dimensions` у вигляді
// рядка. Значення гарантовано розділені пробілом.

// ```js
// function getRectArea(dimensions) {
//     const dimArr = dimensions.split(' ');
//     return dimArr[0] * dimArr[1];
// }

// // АБО ChatCPT
// function getRectArea(dimensions) {
//   const [a, b] = dimensions.split(' ');
//   const area = a * b;
//   return area;
// }

// console.log(getRectArea('8 11'));
// ```

// ## Example 4 - Логування елементів

// Напиши функцію `logItems(items)`, яка отримує масив та використовує цикл
// `for`, який для кожного елемента масиву буде виводити в консоль повідомлення у
// форматі `<номер елемента> - <значення елемента>`. Нумерація елементів повинна
// починатися з `1`.

// Наприклад для першого елемента масиву `['Mango', 'Poly', 'Ajax']` з індексом `0`
// буде виведено `1 - Mango`, а для індексу 2 виведе `3 - Ajax`.

// ```js
// // Chat GPT has the same solution
// function logItems(items) {
//     for (let i = 0; i < items.length; i++) {
//         console.log(`${i + 1} : ${items[i]}`);
//     }
// }

// logItems(['Mango', 'Poly', 'Ajax']);
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);
// ```

// ## Example 5 - Логування контактів

// Напиши функцію `printContactsInfo(names, phones)` яка виводить у консоль ім'я
// та телефонний номер користувача. У параметри `names` та `phones` будуть передані
// рядки імен та телефонних номерів, розділені комами. Порядковий номер імен та
// телефонів у рядках вказують на відповідність. Кількість імен та телефонів
// гарантовано однакова.

// ```js
// // Chat GPT has the same solution
// function printContactsInfo(names, phones) {
//     const namesArr = names.split(',');
//     // console.log(namesArr);
//     const phonesArr = phones.split(',');
//     // console.log(phonesArr);
//     for (let i = 0; i < namesArr.length; i++) {
//         console.log(`${namesArr[i] },${phonesArr[i] }`);
//     }
// }

// printContactsInfo(
//   'Jacob,William,Solomon,Artemis',
//   '89001234567,89001112233,890055566377,890055566300',
// );
// ```

// ## Example 6 - Пошук найбільшого елемента

// Напиши функцію `findLargestNumber(numbers)`яка шукає найбільше число в
// масиві.

// ```js
// // Chat GPT has the same solution
// function findLargestNumber(numbers) {

//     let largestNumber = numbers[0];

//     for (let i = 1; i < numbers.length; i++) {
//         const element = numbers[i];
//         if (element > largestNumber) {
//             largestNumber = element;
//         }
//     }
//     return largestNumber;
// }

// console.log(findLargestNumber([2, 17, 94, 1, 23, 37])); // 94
// console.log(findLargestNumber([49, 4, 7, 83, 12])); // 83
// ```

// ## Example 7 - Середнє значення

// Напишіть функцію `calAverage()` яка приймає довільну кількість аргументів
// і повертає їхнє середнє значення. Усі аргументи будуть лише числами.

// ```js
// // in cooperation with Chat GPT
// function calAverage() {
//     let sum = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         const value = arguments[i];
//         sum += value;
//     }
//     return sum / arguments.length;
// }

// console.log(calAverage(1, 2, 3, 4)); // 2.5
// console.log(calAverage(14, 8, 2)); // 8
// console.log(calAverage(27, 43, 2, 8, 36)); // 23.2
// ```

// ## Example 8 - Форматування часу

// Напиши функцію `formatTime(minutes)` яка переведе значення `minutes`
// (кількість хвилин) у рядок у форматі годин та хвилин `HH:MM`.

// ```js
// // Chat GPT has the same solution
// function formatTime(minutes) {
//     const hours = Math.floor(minutes / 60);
//     const mins = minutes % 60;

//     const doubleDigitHours = String(hours).padStart(2, 0);
//     const doubleDigitMinutes = String(mins).padStart(2, 0);
//     return `${doubleDigitHours}:${doubleDigitMinutes}`;
// }

// console.log(formatTime(70)); // "01:10"
// console.log(formatTime(450)); // "07:30"
// console.log(formatTime(1441)); // "24:01"
// ```

// ## Example 9 - Колекція курсів (includes, indexOf, push і т. д.)

// Напишіть функції для роботи з колекцією навчальних курсів `courses`:

// - `addCourse(name)` - додає курс до кінця колекції
// - `removeCourse(name)` - видаляє курс із колекції
// - `updateCourse(oldName, newName)` - змінює ім'я на нове

// ```js
// // in cooperation with Chat GPT
// const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];
// console.log(courses);

// function addCourse(name) {
//     if (courses.includes(name)) {
//         return console.log('Ви вже маєте такий курс');;
//     }
//     courses.push(name);
// }

// function removeCourse(name) {
//   const index = courses.indexOf(name);
//   if (index === -1) {
//     return console.log("Курс із таким ім'ям не знайдено");;
//   }
//   courses.splice(index, 1);
// }

// function updateCourse(oldName, newName) {
//   const index = courses.indexOf(oldName);
//   if (index === -1) {
//     return console.log("Курс із таким ім'ям не знайдено");
//   }
//   courses[index] = newName;
// }


// addCourse('Express');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
// addCourse('CSS'); // 'Ви вже маєте такий курс'

// removeCourse('React');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
// removeCourse('Vue'); // 'Курс із таким ім'ям не знайдено'

// updateCourse('Express', 'NestJS');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']
// ```
