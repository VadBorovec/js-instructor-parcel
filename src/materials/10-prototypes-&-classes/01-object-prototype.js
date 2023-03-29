// Прототип объекта
// - https://miro.com/app/board/o9J_ku0WE0g=/
// - Object.create()
// - [[Prototype]] и __proto__
// - Object.getPrototype0f()
// - Собственные свойства и object.prototype.has0wnProperty()
// - Цепочка прототипов

// const objC = {
//   z: 5,
// };
// console.log('objC', objC);
// // console.log(objC.hasOwnProperty('z'));

// const objB = Object.create(objC);
// objB.y = 2;

// console.log('objB', objB);
// // console.log('objB.y', objB.y);
// // console.log('objB.z', objB.z);

// const objA = Object.create(objB);
// objA.x = 1;
// console.log('objA', objA);

// console.log('objA.z', objA.z);

// objA.z = 1000;
// console.log('objA.z', objA.z);
// console.log(objA.hasOwnProperty('y'));
// console.log(objA.hasOwnProperty('z'));
// console.log(objA.vcd);

// const dummyObj = Object.create({ message: 'Это свойство объекта протортипа' });
// dummyObj.message = 'Это собственное свойство объекта';
// console.log('dummyObj', dummyObj);
// console.log(dummyObj.message);

// 'Это собственное свойство объекта'
// 'Это свойство на объекте-прототипе'

// Алгоритм поиска свойства В цепочке прототипов:
// 1. Поиск начинается В собственных свойствах
// 2 Если свойства нет в сообственных, поиск переходит K цепочке прототипов
// 3. Поиск прекращается при первом совпадении (есть такое свойство )
// 4. Возвращается значение свойства
