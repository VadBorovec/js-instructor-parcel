// Напиши функцию findLogin(allLogins, login) для поиска логина
// - Если логина нет, вывести сообщение `Пользователь [логин] не найден.`
// - Если нашли логин, вывести сообщение `Пользователь [логин] найден.`

// 1ше рішення
// const logins = ['mAngoDoge', 'k1wtdab3st', 'poly1scute', 'aj4xth3m4n'];
// const loginToFind = 'aj4xth3m4n';
// const message = logins.includes (loginToFind)
// ? `Пользователь ${loginToFind} найден.`
// : `Пользователь ${loginToFind} не найден.`;

// console.log(message);

// 2ге рішення
// const logins = ['mAngoDoge', 'k1wtdab3st', 'poly1scute', 'aj4xth3m4n'];
// const findLogin = function (allLogins, loginToFind) {
//     console.log(logins);
//     console.log(loginToFind);

//     let message = `Пользователь ${loginToFind} не найден.`;

//     for (const login of allLogins) {
//         if (login === loginToFind) {
//             message = `Пользователь ${loginToFind} найден.`;
//             return message;
//         }
//     }
//     return message;
// };

// console.log(findLogin(logins, 'avocod3r'));
// console.log(findLogin(logins, 'k1wtdab3st'));
// console.log(findLogin(logins, 'jam41'));
// console.log(findLogin(logins, 'poly1scute'));

// // 3тє рішення

// const logins = ['mAngoDoge', 'k1wtdab3st', 'poly1scute', 'aj4xth3m4n'];
// const findLogin = function (allLogins, loginToFind) {
//     return allLogins.includes(loginToFind)
//         ? `Пользователь ${loginToFind} найден.`
//         : `Пользователь ${loginToFind} не найден.`;
    
//     // return message;
// };

// console.log(findLogin(logins, 'avocod3r'));
// console.log(findLogin(logins, 'k1wtdab3st'));
// console.log(findLogin(logins, 'jam41'));
// console.log(findLogin(logins, 'poly1scute'));