// // refactor

// Array.prototype reduce( )
// - Поэлементо перебирает оригинальный массив
// - Возвращает что угодно
// - Заменяет всё на свете, но использовать нужно с умом

const numbers = [5, 10, 15, 20, 25];

// const total = numbers.reduce((acc, number) => {
//   console.log('number', number);
//   console.log('acc', acc);

//   return acc + number;
// }, 0);

// // refactor
const total = numbers.reduce((acc, number) => acc + number, 0);

// console.log(total);

// accumulator = 0 -> number = 5 -> return 0 + 5
// accumulator = 5 -> number = 10 -> return 5 + 10
// accumulator - 15 -> number = 15 -> return 15 + 15
// accumulator = 30 -> number = 20 -> return 30 + 20
// accumulator = 50 -> number = 25 -> return 50 + 25

// ==================================================================================

// Count SUM salary

const salary = {
  mango: 100,
  poly: 50,
  ajax: 150,
};

const totalSalary = Object.values(salary).reduce(
  (total, value) => total + value,
  0
);

// console.log('totalSalary: ', totalSalary);

// ==================================================================================

// Count SUM timePlayed

const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, online: false },
  { id: 'player-5', name: 'Chelsey', timePlayed: 80, online: true },
];

const totalTimePlayed = players.reduce(
  (totalTime, { timePlayed }) => totalTime + timePlayed,
  0
);

// console.log('totalTimePlayed: ', totalTimePlayed);

// ==================================================================================

// Count SUM goods in cart

const cart = [
  { label: 'Apples', price: 100, quantity: 2 },
  { label: 'Bananas', price: 120, quantity: 3 },
  { label: 'Lemons', price: 70, quantity: 4 },
];

const totalAmount = cart.reduce(
  (total, { price, quantity }) => total + price * quantity,
  0
);

// console.log('totalAmount: ', totalAmount);

// ==================================================================================

// Count SUM all tags from tweets

const tweets = [
  { id: '000', likes: 5, tags: ['js', 'nodejs'] },
  { id: '001', likes: 2, tags: ['html', 'css'] },
  { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
  { id: '003', likes: 8, tags: ['css', 'react'] },
  { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
];

// const allTags = tweets.reduce((acc, tweet) => {
//   acc.push(...tweet.tags);
//   return acc;
// }, []);

// // refactor
const allTags = tweets.reduce((acc, { tags }) => [...acc, ...tags], []);

// acc = [], tweet.tags = ['js', 'nodejs' ] return [...[]. ...['js', 'nodejs']]
// acc = ['js', 'nodejs'] tweet.tags ['html', 'css'] return [...['js', 'nodejs'], ...['html'. 'css' ]]
// acc = ['js', 'nodejs', 'html', 'css'] ...

// console.log(allTags);
// console.table(allTags);

// ==================================================================================

// Count tag statistics

// const tagsStats = allTags.reduce((acc, tag) => {
//   //   console.log(acc);
//   if (acc[tag]) {
//     acc[tag] += 1;

//     return acc;
//   }
//   acc[tag] = 1;

//   return acc;
// }, {});

// // refactor
// const tagsStats = allTags.reduce((acc, tag) => {
//   if (acc[tag]) {
//     // acc[tag] += 1;
//     return {
//       ...acc,
//       [tag]: acc[tag] + 1,
//     };
//   }
//   //   acc[tag] = 1;
//   return {
//     ...acc,
//     [tag]: 1,
//   };
// }, {});

// // refactor 2
// const tagsStats = allTags.reduce((acc, tag) => {
//   return {
//     ...acc,
//     [tag]: acc[tag] ? acc[tag] + 1 : 1,
//   };
// }, {});

// // refactor 3
const tagsStats = allTags.reduce(
  (acc, tag) => ({
    ...acc,
    [tag]: acc[tag] ? acc[tag] + 1 : 1,
  }),
  {}
);

// // OR refactor 3
// const tagsStats = allTags.reduce(
//   (acc, tag) =>
//     acc[tag] ? { ...acc, [tag]: acc[tag] + 1 } : { ...acc, [tag]: 1 },
//   {}
// );

// console.log('tagsStats: ', tagsStats);
