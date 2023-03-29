// Array.prototype.flat(depth)
// - Разглаживает массив до указанной глубины
// - По умолчанию глубина 1

const array = [1, 2, [4, [5]], [6, [7, 8, [9]]]];

// console.log(array);
// console.log(array.flat());
// console.log(array.flat(2));
// console.log(array.flat(3));

// ================================================================

// Array.prototype.flatMap(callback)
//  - Комбинация map + flat

const tweets = [
  { id: '000', likes: 5, tags: ['js', 'nodejs'] },
  { id: '001', likes: 2, tags: ['html', 'css'] },
  { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
  { id: '003', likes: 8, tags: ['css', 'react'] },
  { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
];

// console.table(tweets);

// With REDUCE
// const tags = tweets.reduce((acc, tweet) => [...acc, ...tweet.tags], []);

// With MAP & FLAT
// const tags = tweets.map(obj => obj.tags).flat();

// // Refact
// const tags = tweets.flatMap(obj => obj.tags);

// console.log(tags);

// const stats = tags.reduce((acc, tag) => {
//   return {
//     ...acc,
//     [tag]: acc[tag] ? acc[tag] + 1 : 1,
//   };
// }, {});

// // Refact
const stats = tweets
  .flatMap(obj => obj.tags)
  .reduce(
    (acc, tag) => ({
      ...acc,
      [tag]: acc[tag] ? acc[tag] + 1 : 1,
    }),
    {}
  );

// console.log(stats);
