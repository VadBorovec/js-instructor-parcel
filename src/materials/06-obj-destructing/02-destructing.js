// Деструктуризация объекта
// - Значения по умолчанию
// - Имя переменной отличное от имени свойства

// const playlist = {
//     name: 'Мой супер плейлист',
//     rating: 5,
//     tracks: ['трек-1', 'трек-2', 'трек-3'],
//     trackCount: 3,
// };

// const { rating = 3, tracks, name, trackCount: numberOfTracks, author = 555 } = playlist;

// console.log(rating);
// console.log(tracks);
// console.log(name);
// console.log(numberOfTracks);
// console.log(author);

// Глубокая деструктуризация

// const profile = {
//     name: 'Jacques Gluke',
//     tag: 'jgluke',
//     location: 'Ocho Rios, Jamaica',
//     avatar: 'https://s3.amazonaws.com/uifaces/twitter/r_oy/128jpg',
//     stats: {
//         followers: 5603,
//         views: 4827,
//         likes: 1308,
//     },
// };

// const { name, tag, location, avatar, stats } = profile;
// const { followers, views, likes } = stats;

// console.log(
//     'name: ', name,
//     'tag: ', tag,
//     'location: ', location,
//     'avatar: ', avatar,
//     'followers: ', followers,
//     'views: ', views,
//     'likes: ', likes
// );

// Деструктуризация массивов

// const rgb = [255, 100, 80];

// const [red,green,blue] = rgb;

// console.log(red,green,blue);

// Знайти найвищий рейтинг Автора
// const authors = {
//     kiwi: 4,
//     poly: 7,
//     ajax: 9,
//     mango: 6,
// };

// const entries = Object.entries(authors);
// console.log(entries);

// for (const entry of entries) {
//     // console.log(entry);
//     // const name = entry[0];
//     // const rating = entry[1];
//     // OR
//     const [name, rating] = entry;

//     console.log(name, rating);
// }

// Операція rest (збір)

// const profile = {
//     name: 'Jacques Gluke',
//     tag: 'jgluke',
//     location: 'Ocho Rios, Jamaica',
//     avatar: 'https://s3.amazonaws.com/uifaces/twitter/r_oy/128jpg',
//     stats: {
//         followers: 5603,
//         views: 4827,
//         likes: 1308,
//     },
// };

// const { name, tag, location, ...restProps } = profile;

// console.log(name, tag, location);
// console.log(restProps);
// console.log(profile);

// Паттерт "Обьект настроек"
// - деструктуризацыя параметра - обьекта в подписи фнкции
// - rest при деструктуризации в подписи

// const showProfileInfo = function (userProfile) {
//     const {
//         name,
//         tag,
//         location,
//         avatar,
//         stats: { followers, views, likes },
//     } = userProfile;

//     console.log(name, tag, location, avatar, followers, views, likes);
// };

// const profile = {
//     name: 'Jacques Gluke',
//     tag: 'jgluke',
//     location: 'Ocho Rios, Jamaica',
//     avatar: 'https://s3.amazonaws.com/uifaces/twitter/r_oy/128jpg',
//     stats: {
//         followers: 5603,
//         views: 4827,
//         likes: 1308,
//     },
// };

// showProfileInfo(profile);