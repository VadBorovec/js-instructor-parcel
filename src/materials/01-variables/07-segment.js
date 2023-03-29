// Напиши скрипт который проверяет вхождение числа
// в отрезок обозначенный x1 и x2.
// - До x1
// - После x2
// - От x1 до x2
// - До x1 или после x2

const x1 = 10;
const x2 = 30;
const number = 50;

console.log(`Число ${number} попадает 8 отрезок до ${x1}?`, number < x1);
console.log(`Число ${number} попадает 8 отрезок после ${x2}?`, number > x2);

const res = number > x1 && number < x2;
console.log(`Число ${number} попадает 8 отрезок от ${x1} до ${x2}?`, res);

const res2 = number < x1 || number > x2;
console.log(`Число ${number} попадает в отрезок до ${x1} или после ${x2}?`, res2);
