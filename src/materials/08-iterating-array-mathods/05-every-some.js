const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
  { id: 'player-5', name: 'Chelsy', timePlayed: 280, points: 48, online: true },
];

// Array.prototype.every()
// - Поэлементо перебирает оригинальный массив
// - Возвращает true если все элементы массива удовлетворяют условию

// // Все игроки играли онлайн

// const isAllOnline = players.every(player => player.online);

// // refactor
const isAllOnline = players.every(({ online }) => online);

// console.log('isAllOnline: ', isAllOnline);

// // Все игроки играли больше 100 часов

const isAllOverTime = players.every(player => player.timePlayed > 100);

// console.log('isAllOverTime: ', isAllOverTime);

// =================================================================

// Array.prototype.some()
// - Поэлементо перебирает оригинальный массив
// - Возвращает true если хотя бы один элемент массива удовлетворяет условию

// // Есть ли игроки, онлайн

const isAnyOnline = players.some(player => player.online);
// console.log('isAnyOnline: ', isAnyOnline);

// // Есть ли игроки, которые играли больше 400 часов

const anyHardcorePlayers = players.some(player => player.timePlayed > 400);
// console.log('anyHardcorePlayers: ', anyHardcorePlayers);
