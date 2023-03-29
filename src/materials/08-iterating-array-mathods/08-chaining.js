// Цепочки вызовов - chaining

const numbers = [1, 5, 2, 4, 3];
// console.log(numbers);

const greaterThenTwo = numbers.filter(num => num > 2);
// console.log(greaterThenTwo);

const multByThree = greaterThenTwo.map(function (num) {
  return num * 3;
});
// console.log(multByThree);

const sorted = multByThree.sort(function (a, b) {
  return a - b;
});
// console.log(sorted);

// Цепочка предыдущих трёх
const result = numbers
  .filter(num => num > 2)
  .map(num => num * 3)
  .sort((a, b) => a - b);

// console.log(result);

// ======================================================================

// Сортируем тех кто онлайн по рангу
// - сначала фильтруем
// - потом сортируем

const players = [
  { id: 'id-1', tag: 'Mango', isOnline: true, rank: 800 },
  { id: 'id-2', tag: 'Poly', isOnline: false, rank: 600 },
  { id: 'id-3', tag: 'Ajax', isOnline: true, rank: 100 },
  { id: 'id-4', tag: 'Kiwi', isOnline: true, rank: 400 },
];

const onlineAndSorted = players
  .filter(player => player.isOnline)
  .sort((playerA, playerB) => playerA.rank - playerB.rank);

// console.table(onlineAndSorted);

// ======================================================================

// Chaining В методах объекта как jquery

// // Don't work
// const element = {
//   class: '',
//   hovered: false,
//   changeClass(cls) {
//     this.class = cls;
//   },
//   toggleHovered() {
//     this.hovered = !this.hovered;
//   },
// };

// // Works!
const element = {
  class: '',
  hovered: false,
  changeClass(cls) {
    this.class = cls;
    // add string below
    return this;
  },
  toggleHovered() {
    this.hovered = !this.hovered;
    // add string below
    return this;
  },
};

// element.toggleHovered().changeClass('open');
// console.log(element);
