// Array.prototype.find()
// - Поэлементо перебирает оригинальный массив
// - Возвращает первый элемент удовлетворяющий условию или undefined

const numbers = [5, 10, 15, 20, 25];

const number = numbers.find(number => number > 10);
const number2 = numbers.find(number => number === 10);
const number3 = numbers.find(number => number === 9);

// console.log(number);
// console.log(number2);
// console.log(number3);

// ==================================================================

const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
  { id: 'player-5', name: 'Chelsy', timePlayed: 280, points: 48, online: true },
];

console.table(players);
// Ищем игрока по id

const playerIdToFind = 'player-3';

// const playerWithId = players.find(player => player.id === playerIdToFind);

// // refactor
const playerWithId = players.find(({ id }) => id === playerIdToFind);

// console.table(playerWithId);

// Ищем игрока по имени

const playerNameToFind = 'Poly';

const playerWithName = players.find(({ name }) => name === playerNameToFind);
// console.table(playerWithName);

// //  Умовна задача знайти користувача по ID

// const findPlayerById = (allPlayers, playerId) => {
//   return allPlayers.find(player => player.id === playerId);
// };

// // refactor
const findPlayerById = (allPlayers, playerId) =>
  allPlayers.find(({ id }) => id === playerId);

// console.log(findPlayerById(players, 'player-1'));
// console.log(findPlayerById(players, 'player-4'));
