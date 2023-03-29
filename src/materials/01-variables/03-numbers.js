// Парс числа с Number.parseInt() и Number.parseFloat()


// let elementWidth = '50.25px';
// const result = Number.parseInt(elementWidth);
// console.log('elementWidth:', result);

// let elementHeight = '200.74px';
// elementHeight = Number.parseFloat(elementHeight);
// console.log('elementHeight:', elementHeight);
  

// Метод число. toFixed(digits)
// Матрёшки на примере console. Log(Number( число. toFtxed(digits)))

// const salary = 1300.16472;
// console.log(salary.toFixed());
// console.log(salary);

// OR

// let salary2 = 1300.16472;
// salary2 = Number(salary2.toFixed(2));

// console.log(salary2);


// Приведение (преобразование) к числу с Number(value)
// Значение NaN (Not a Number) и метод Number .isNaN(value)

// let quantity = '30';
// let value = 'Эту строку невозможно привести к числу';

// console.log(Number(quantity));
// console.log(Number(value));
// console.log(Number(5 / 0));


// Об'єкт Math
// піднесення числа до степеня

// let base = prompt('Add number');
// base = Number(base);
// console.log(base);

// let power = prompt('Add power');
// power = Number(power);
// console.log(power);

// const result = base ** power;
// console.log(result);


// генератор випадкових чисел Math.random() Math.round()

// const max = 50;
// const min = 30;

// const result = Math.round(Math.random() * (max - min) + min);
// console.log(result);

// приміняє випадковий кроір для фону

const colors = ['teal', 'indigo', 'tomato', 'maroon', 'plum', 'cyan', 'violet', 'skyblue', 'orange', 'aquamarine'];
const max = colors.length - 1;
const min = 0;

const index = Math.round(Math.random() * (max - min) + min);
const color = colors[index];

console.log(color);

document.body.style.backgroundColor = color;
 