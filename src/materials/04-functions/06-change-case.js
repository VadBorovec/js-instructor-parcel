// Напиши функцию changeCase(string) которая заменяет регистр
// каждого символа в строке на противоположный,
// Например, если строка «JavaScript», TO на выходе должена
// быть строка «jAVAsCRIPT».

// const string = 'qWeRTzxCv';
// const letters = string.split('');

// console.log(letters);

// let invertedString = '';

// console.log(invertedString);

// for (const letter of letters) {
//     const isEqual = letter === letter.toLowerCase();

//     console.log(isEqual);

//     invertedString += isEqual ? letter.toUpperCase() : letter.toLowerCase();
// }

// console.log('invertedString: ', invertedString);

// // Рішення з використанням функції

// const changeCase = function (string) {
//     const letters = string.split('');
//     let invertedString = '';

//     for (const letter of letters) {
//         const isInLowerCase = letter === letter.toLowerCase();

//         invertedString += isInLowerCase
//             ? letter.toUpperCase()
//             : letter.toLowerCase();
//     }

//     return invertedString;
// }

// console.log(changeCase('qweRTY')); // QWErty
// console.log(changeCase('mAnGo')); // MaNg0
// console.log(changeCase('AJAX')); // ajax