const magicBtn = document.querySelector('.js-magic-btn');
const imageEl = document.querySelector('.hero__image');

// Свойства элемента (hero)
// - Изображение
// - Текст и textContent
// https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=480

magicBtn.addEventListener('click', () => {
  console.log('imageEl', imageEl);
  console.log(imageEl.src);
  imageEl.src =
    'https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=480';
  imageEl.alt = 'this is new cat';
});

const heroTitleEl = document.querySelector('.hero__title');
console.log('heroTitleEl: ', heroTitleEl);
console.log(heroTitleEl.textContent);
heroTitleEl.textContent = 'New Hero Title';

// input the property is stored in an attribute - '.value'
magicBtn.addEventListener('click', () => {
  const inputEl = document.querySelector('.js-input');
  console.log(inputEl.value);
  inputEl.value = 'ist typed in script';
});

// // Атрибуты
// // - get (имя-атрибута)
// // - set(имя-атрибута)
// // - remove (имя-атрибута)
// // - has(имя-атрибута)

// console.log(imageEl.getAttribute('src'));
// console.log(imageEl.src);
// console.log(imageEl.hasAttribute('src'));
// console.log(imageEl.hasAttribute('src123'));

// // Дата - атрибуты

// const actions = document.querySelectorAll('.js-actions button');
// console.log(actions);
// console.log(actions[0]);
// console.log(actions[0].dataset);
// // have special interface - .'dataset' & '.action'
// console.log(actions[0].dataset.action);
// // OR (same as previous)
// console.log(actions[0].getAttribute('data-action'));
