// підраховує кількість символів

const message = 'How many symbols, in thsi string?';
console.log(message.length);

// конкатенація рядків

const firstName = 'Manchester';
const lastName = 'United';
const fullName = firstName + ' ' + lastName;

// console.log(firstName + lastName);
console.log(fullName);

// Написати скипт який виведе рядок у форматі
// Гість x y заселяється в z номер q
//  підставивши замість x y z q значення змінних

const room = '716';
const type = 'VIP';
// const welcomeMsg = 'Гість ' + firstName + ' ' + lastName + ' заселяється в ' + type + ' номер ' + room + '.';
const welcomeMsg = `Гість ${firstName} ${lastName} заселяється в ${type} номер ${room}.`;


console.log(welcomeMsg);

// шаблонні рядки (tempate strings)

const quantity = 5;
const orderMsg = `Ви замовляєте ${quantity} холодильників`;

console.log(orderMsg);

// нормалізація з методом toLoverCase()

let brand = 'Samsung';
brand = brand.toLowerCase();

console.log(brand);

// пошук в рядку з методом includes()

const blacklistedWord1 = 'спам';
const blacklistedWord2 = 'розпродаж';

const string1 = 'Привіт, це принц Абдул, це не спам, пропоную тобі мільйон';
const string2 = 'Найбільш велиикий РОЗПРОДАЖ на цьому тижні, не пропусти';
const string3 = 'Рекламна компанія #fatlivesmatter';

// console.log(string1.includes(blacklistedWord1));
// console.log(string1.includes(blacklistedWord2));

// console.log(string2.includes(blacklistedWord1));

// const normalizedString2 = string2.toLowerCase();
// console.log(normalizedString2.includes(blacklistedWord2));

// console.log(string3.toLowerCase().includes(blacklistedWord1));
// console.log(string3.toLowerCase().includes(blacklistedWord2));