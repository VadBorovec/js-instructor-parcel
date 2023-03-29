// Напиши скрипт выбора стоимости отеля по кол-ву звёзд.
// 1 - 20$, 2 - 30$, 3 - 50$, 4 - 70$, 5 - 120$

// Если 8 переменной stars что - то кроме чисел 1 - 5, выведи строку
// 'Такого кол-ва звезд нет'

// const stars = 1;
// let price;
// if (stars === 1) {
//     price = 20;
// } else if (stars === 2) {
//     price = 30;
// } else if (stars === 3) {
//     price = 50;
// } else if (stars === 4) {
//     price = 70;
// } else if (stars === 5) {
//     price = 120;
// } else {
//     price = 'Такого кол-ва звезд нет';
// }

// console.log(price);

// OR

// const stars = 8;
// let price;
// switch (stars) {
//     case 1:
//         price = 20;
//         break;
//     case 2:
//         price = 30;
//         break;
//     case 3:
//         price = 50;
//         break;
//     case 4:
//         price = 70;
//         break;
//     case 5:
//         price = 120;
//         break;
//     default:
//         // console.log('Такого кол-ва звезд нет');
//         price = 'Такого кол-ва звезд нет';
// }

// console.log(price);

// Напиши скрипт выбора стоимости отеля по кол-ву звёзд.
// 1, 2 - 20$, 3, 4 - 30$, 5 - 120$

// const stars = 5;
// let price;

// if (stars === 1 || stars === 2 ) {
//     price = 20;
// } else if (stars === 3 || stars === 4 ) {
//     price = 30;
// } else if (stars === 5) {
//     price = 120;
// } else {
//     price = 'Такого кол-ва звезд нет';
// }

// console.log(price);

// OR

// const stars = 4;
// let price;
// switch (stars) {
//     case 1:
//     case 1:
//         price = 20;
//         break;
//     case 3:
//     case 4:
//         price = 30;
//         break;
//     case 5:
//         price = 120;
//         break;
//     default:
//         price = 'Такого кол-ва звезд нет';
// }

// console.log(price);
   
    
// Напиши скрипт выбора опции доставки товара.
// Опция хранится B переменной option: 1 - самовывоз, 2 - курьер, 3 - почта
    
// В переменную message записать сообщение в зависимости от опции:
// - 'Вы сможете забрать товар завтра c 12:00 в нашем офисе'
// - 'Курьер доставит заказ завтра c 9:00 до 18:00'
// - 'Посылка будет отправлена сегодня'
// - 'Вам перезвонит менеджер'

const option = 2;
let message;
switch (option) {
    case 1:
        message = 'Вы сможете забрать товар завтра c 12:00 в нашем офисе';
        break;
    case 2:
        message = 'Курьер доставит заказ завтра c 9:00 до 18:00';
        break;
    case 3:
        message = 'Посылка будет отправлена сегодня';
        break;
    default:
        message = 'Вам перезвонит менеджер';
}

console.log(message);