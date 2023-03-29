// Array.prototype.sort(callback(currentEl, nextEl){})
// - Сортирует и ИЗМЕНЯЕТ оригинальный массив
// - По умолчанию приводит элементы K строке и сортирует по !юникоду!

const numbers = [1, 9, 6, 2, 3];
// numbers.sort();
// console.log(numbers);

const letters = ['b', 'B', 'a', 'A'];
// letters.sort();
// console.log(letters);

// compareFunction - функция сравнения (callback)
// Элементы массива сортируются В соответствии C её возвращаемым значением
// - если compareFunction(A, B) меньше 0, сортировка поставит A перед В
// - если compareFunction(A, B) больше 0, сортировка поставит В перед A
// - если compareFunction(A, B) вернёт 0, сортировка оставит A и В на
// неизменными по отношению друг K другу, но отсортирует их по отношению KO всем
// другим элементам,

// // По возрастанию
// numbers.sort((curEl, nextEl) => {
//   return curEl - nextEl;
// });

// // По убыванию
// numbers.sort((curEl, nextEl) => {
//   return nextEl - curEl;
// });

// console.log(numbers);

// Как сделать копию массива чтобы не сортировать оригинальный
// - Array.prototype.slice()
// - Operation spread

const copySortUp = [...numbers];
copySortUp.sort();
const copySortDown = [...numbers].sort((a, b) => b - a);

// console.log('numbers', numbers);
// console.log('copySortUp', copySortUp);
// console.log('copySortDown', copySortDown);

// OR
// console.log([1, 2, 3, 4, 5].reverse());

// Кастомная сортировка сложных типов

const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, online: false },
  { id: 'player-5', name: 'Chelsey', timePlayed: 80, online: true },
];
// console.table(players);

// По игровому времени

const sortedByTopPlayers = [...players].sort(
  (prevPlayer, nextPlayer) => nextPlayer.timePlayed - prevPlayer.timePlayed
);
// console.table(sortedByTopPlayers);

const sortedByWorstPlayers = [...players].sort(
  (prevPlayer, nextPlayer) => prevPlayer.timePlayed - nextPlayer.timePlayed
);
// console.table(sortedByWorstPlayers);

// Sort by NAME

const sortedByName = [...players].sort((prevPlayer, nextPlayer) => {
  const result = prevPlayer.name[0] > nextPlayer.name[0];

  if (result) {
    return 1;
  }
  return -1;
});

// console.table(sortedByName);
