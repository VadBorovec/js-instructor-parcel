// Array.prototype.map()
// - Позлементо перебирает оригинальный массив
// - Не изменяет оригинальный массив
// - Возврашает новый массив такой же длины

// ==================================================================
// // Задача - створити наовий масив, який повертає подвоєні значення вихідного масиву

// const numbers = [5, 10, 15, 20, 25];

// const doubledNums = numbers.map(number => {
//   console.log(number);
//   return number * 2;
// });

// console.log('numbers: ', numbers);
// console.log('doubledNums: ', doubledNums);

// ===============================================================
// Задача - НА МАССИВ ИГРОКОВ

const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
  { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
];

console.table(players);

// Задача - Получаем массив имён всех игроков

const playerNames = players.map(player => player.name);
// console.log('playerNames: ', playerNames);

// Задача - Получаем массив имён всех ID

const playerIds = players.map(player => player.id);
// console.log('playerIds: ', playerIds);

// Задача - Получаем массив имён и статуса онлайн

const res = players.map(({ name, online }) => ({ name, online }));
// console.log('res', res);

// Задача - Увеличиваем количество поинтов каждого игрока на 10%

const upatedPlayers = players.map(player => ({
  ...player,
  points: player.points * 1.1,
}));
// console.table(upatedPlayers);

// Задача - Увеличиваем кол-во часов игрока по id

const playerIdToUpdate = 'player-3';

// const updatedPlayers = players.map(player => {
//   if (playerIdToUpdate === player.id) {
//     return {
//       ...player,
//       timePlayed: player.timePlayed + 100,
//     };
//   }

//   return player;
// });

// // refactor

// const updatedPlayers = players.map(player => {
//   return playerIdToUpdate === player.id
//     ? {
//         ...player,
//         timePlayed: player.timePlayed + 100,
//       }
//     : player;
// });

// // refactor

const updatedPlayers = players.map(player =>
  playerIdToUpdate === player.id
    ? { ...player, timePlayed: player.timePlayed + 100 }
    : player
);

// console.table(updatedPlayers);
