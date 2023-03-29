/*
 * Свойство innerHTML
 * - чтение
 * - запись
 */

const titleEl = document.querySelector('.title');
// whats different ?
// console.log(titleEl.textContent);
// console.log(titleEl.innerHTML);

// titleEl.innerHTML = '<a href="">Это ссылка)</a>';
// titleEl.innerHTML = '';

/*
 * Вставка разметки с insertAdjacentHTML()
 * http://fecore.net.ua/books/m5ph3r-javascript/module-07/dom-manipulation.html#%D0%BC%D0%B5%D1%82%D0%BE%D0%B4-insertadjacenthtml
 */

// beforebegin, afterbegin, beforeend, afterend
titleEl.insertAdjacentHTML(
  'beforeend',
  '<a href="" class="title__link">Это ссылка)</a>'
);
