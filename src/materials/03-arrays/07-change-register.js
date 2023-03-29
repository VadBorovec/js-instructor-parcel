// Напиши скрипт, який заміняє регістр кожного смволу в рядку на протилежний

// Наприклад якщо рядок 'JavaScript', то на виході має бути 'jAVA sCRIPT'

// // Олд-скульний метод
// const script = 'JavaScript';
// const letters = script.split('');
// console.log(letters);
// let invertedString = '';

// for (const letter of letters) {
//     console.log(letter);

//     if (letter === letter.toLowerCase()) {
//         console.log('Its letter in lower case', letter);
//         invertedString += letter.toUpperCase();
//     } else {
//         console.log('Its letter in upper case', letter);
//         invertedString += letter.toLocaleLowerCase();
//     }
// }

// console.log('invertedString :', invertedString);

// // Нью-скульний метод
// const script = 'JavaScript';
// const letters = script.split('');
// let invertedString = '';

// console.log(letters);

// for (const letter of letters) {
//     console.log(letter);

//     // invertedString = letter === letter.toLowerCase()
//     //     ? invertedString += letter.toUpperCase()
//     //     : invertedString += letter.toLocaleLowerCase();
    
//     // OR
//         invertedString += letter === letter.toLowerCase()
//         ? letter.toUpperCase()
//         : letter.toLocaleLowerCase();
// }

// console.log('invertedString :', invertedString);