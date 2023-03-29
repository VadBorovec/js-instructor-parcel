// Делаем slug в URL из названия статьи (например на dev.to)
// Заголовок статьи состоит ТОЛЬКО из букв и пробелов    
//     - Нормализируем строку
//     - Разбиваем по словам
//     - Сшиваем в строку c разделителями

// // Должно получиться top-10-benefits-of-react-framework
// const title = 'Top 10 benefits of React framework';

// const normalizedTitle = title.toLowerCase();
// console.log(normalizedTitle);

// const words = normalizedTitle.split(' ');
// console.log(words);

// const slug = words.join('-');
// console.log('slug :', slug);

// // Optimization
// const slugOpti = title.toLocaleLowerCase().split(' ').join('-');
// console.log('slugOpti :', slugOpti);
