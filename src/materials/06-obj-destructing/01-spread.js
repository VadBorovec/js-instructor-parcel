// Операция spread (распыление)
// Array.prototype.concat и аналог через spread

// const numbers = [1, 2, 3].concat([4, 5, 6], [7, 8, 9]);

// const numbers = [...[1,2,3], ...[4,5,6], ...[7,8,9]];

// console.log(numbers);



// Поиск самой маленькой или большой температуры(числа)

// const temps = [18, 14, 12, 21, 17, 29, 24];

// console.log(temps);
// console.log(...temps);
// console.log('Найвища температура: ', Math.max(...temps));
// console.log('Найнижча температура: ', Math.min(...temps));


// ЗАРАЗ БУДЕ МАГІЯ

// const a = [1, 2, 3];
// const b = [...a];

// console.log(a);
// console.log(b);
// console.log(a === b);

// АЛЕ (масиви різні, але елементи масивів однакові, бо зберігаються за посиланнями)

// const a = [{ x: 1 }, { y: 2 }, { z: 3 }];
// const b = [...a];
// console.log('a: ', a);
// console.log('b: ', b);

// console.log(a[0] === b[0]);
// console.log(a===b);

// Сшиваем несколько массивов в один через concat() и spread

// const lastWeekTemps = [1, 2, 3];
// const currentTemps = [4, 5, 6];
// const nextWeekTemps = [7, 8, 9];

// const allTemps = [...lastWeekTemps, ...currentTemps, ...nextWeekTemps];
// console.log(allTemps);


// Распыление объектов
// - Object.prototype.assign() и spread

// const a = { x: 1, y: 2 };
// const b = { x: 0, z: 3 };

// Не сучасний запис
// const c = Object.assign({}, a, b); // {x: 0, y: 2, z: 3}

//  Сучасний запис
// const c = {
//     ...a,
//     ...b,
// };

// console.log(c);
