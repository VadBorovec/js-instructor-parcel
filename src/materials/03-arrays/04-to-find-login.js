// Напиши скрипт поиска логина
// - Если логина нет, вывести сообщение 'Пользователь [логин] не найден.'
// - Если нашли логин, вывести сообщение 'Пользователь [погин] найден.'
    
// - Сначала через for
// - Потом через for...of;
// - Логика break
// - Метод includes() с тернарным оператором

// // FOR
// const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];
// const loginToFind = 'poly1scute';
// let message = '';

// for (let i = 0; i < logins.length; i += 1) {
//     let login = logins[i];
//     if (login === loginToFind) {
//         message = `Пользователь ${loginToFind} найден.`;
//         break;
//     }
//     message = `Пользователь ${loginToFind} не найден.`;
// }
// console.log(message);

// // FOR OF
// const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];
// const loginToFind = 'poly1scute';
// let message = `Пользователь ${loginToFind} не найден.`;

// for (let login of logins) {
//     console.log('Login :', login);
//     console.log(`${login} === ${loginToFind} : `, login === loginToFind);
//     if (login === loginToFind) {
//         message = `Ура! Пользователь ${loginToFind} найден.`;
//         break;
//     }
// }
// console.log(message);

// // Метод Includes()
// const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];
// const loginToFind = 'poly1scute';
// const message = logins.includes(loginToFind)
//     ? `Пользователь ${loginToFind} найден.`
//     : `Пользователь ${loginToFind} не найден.`;
// console.log(message);
