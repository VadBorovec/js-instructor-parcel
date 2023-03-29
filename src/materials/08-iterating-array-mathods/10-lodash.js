// - [Библиотека Lodash] (https://github.com/lodash/lodash)

// =======================================================================

// isEmpty() // _.isEmpty(value)

// console.log(_.isEmpty({}));
// console.log(_.isEmpty({ a: 1 }));

// =======================================================================

// get() // _.get(object, path, [defaultValue])
// Пошук глибоко в обєкті

const user = {
  name: 'mango',
  location: {
    coords: [1, 2],
    city: 'Lviv',
  },
};

// console.log(_.get(user, 'location.city'));
// console.log(user.location.city);

// - user && user.location && obj.location.city
// - user?.location?.city

// New syntax in JS
// console.log(user?.location?.city);

// =======================================================================

// union() // _.union([array1], [array2])
// Массив унікальних значень

// console.log(_.union([1, 2, 3], [3, 4, 5]));

// unionBy(); // _.unionBy([arrays], [iteratee=_.identify])
// массив унікальниx обєктів

// =======================================================================

// range() // _.range([start=0], end, [step=1])
// массив

// console.log(_.range(6));
// console.log(_.range(1, 6));
// console.log(_.range(1, 6, 2));

// =======================================================================

// sortBy() // _.sortBy(collection, [iteratees=[_.identify]])

const users = [
  { user: 'fred', age: 48 },
  { user: 'barney', age: 36 },
  { user: 'fred', age: 40 },
  { user: 'barney', age: 34 },
];

// console.table(users);
// console.table(_.sortBy(users, user => user.age));

// =======================================================================

// sum() // _.sum(array) // и sumBy() // _.sumBy(array, [iteratee=_.identify])

// console.log(_.sum([1, 2, 3, 4, 5]));

const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, online: false },
  { id: 'player-5', name: 'Chelsey', timePlayed: 80, online: true },
];
// console.table(players);

// console.log(_.sumBy(players, player => player.timePlayed));

// =======================================================================

// uniq() //  _.uniq(array)  // и uniqBy()

// =======================================================================

// sorteUniq() // _. sorteUniq(array) // и sorteUniqBy()

// =======================================================================

// random()

// =======================================================================

// min() & max() // minBy() & maxBy()

// console.log(Math.min(...[1, 2, 3, 4, 5]));
// console.log(_.min([1, 2, 3, 4, 5]));
// console.log(_.minBy(players, player => player.timePlayed).name);

// =======================================================================

// camelCase(), capitalize(), kebabCase(), lowerCase(), upperCase();
// _.camelCase([string='])

// console.log(_.camelCase('Foo Bar'));
// console.log(_.camelCase('--foo-bar--'));
// console.log(_.camelCase('__F0O_BAR__'));
// console.log(_.kebabCase(' a b c '));
