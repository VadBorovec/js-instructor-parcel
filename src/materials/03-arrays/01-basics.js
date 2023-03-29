// Знакомство с массивами
// - Объявление
// - Индексация
// - Длина
// - Индекс последнего элемента
// - Переопределение

// 'Mango', 'Kiwi', 'Poly', 'Ajax'

// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
// // вивід в таблиці
// console.table(friends);

// // вивід елемента з індексом 2
// console.log(friends[2]);

// // зміна елемента масиву (це не запис змінної)
// friends[1] = 'Opera';
// friends[3] = 'Sator';
// console.log(friends);


// const lastIndex = friends.length - 1;
// console.log(lastIndex);

// Передача по ссылке и по значению
// - Примитивы и сложные типы
// - Ссылочное равенство (referential equality)

// передача по значенню
// let a = 10;
// let b = a;
// console.log(a);
// console.log(b);
// // значення b не перезаписується
// a = 20;
// console.log(a);
// console.log(b);

// передача по посиланню
// const a = [1, 2, 3];
// const b = a;
// console.log('a', a);
// console.log('b', b);
// // значення b перезаписується, тому що це посилання на масив
// a[0] = 500;
// console.log('a', a);
// console.log('b', b);

// // порівняння масивів по комірці в пам'яті а не по значеннях в середині масиву
// // 2 різних масиви не рівні один одному навіть якщо їх елементи збігаються
// console.log(a === b);
// console.log([1, 2, 3] === [1, 2, 3]);

// Перебор(итерация) массива
// - for если нужен индекс или нужно изменить элемент массива
// - for...of - ecлu индекс не нужен и в массиве ничего менять не нужно

//  // Якщо потрібно змінити значення елемента
// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
// console.table(friends);
// const LastIndex = friends.length - 1;

// for (let i = 0; i <= LastIndex; i += 1) {
//     // console.log(friends[i]);
//     friends[i] += '-1'
// }
// console.table(friends);

// // Якщо не потрібно змінювати значення елемента
// // for (const / let variable of iterable) { }
// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
// // console.table(friends);

// for (let friend of friends) {
//     console.log(friend);
//     // friend = friends[i];
//     // friend += '-1';
// }

// console.log(friends);