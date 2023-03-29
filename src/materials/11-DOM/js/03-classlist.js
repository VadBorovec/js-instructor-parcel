const magicBtn = document.querySelector('.js-magic-btn');

// Интерфейс classList
// - add(класс)
// - remove(класс)
// - toggle(класс)
// - replace(старыйКласс, новыйКЛасс)
// - contains(класс)

const navEl = document.querySelector('.site-nav');
console.log(navEl.classList);
navEl.classList.add('super-cool');
navEl.classList.remove('site-nav');
navEl.classList.replace('super-cool', 'second-super-cool');

magicBtn.addEventListener('click', () => {
  navEl.classList.toggle('qwerty');
});

console.log(navEl.classList.contains('querty'));
console.log(navEl.classList.contains('second-super-cool'));

const currentPageUrl = '/portfolio';
const linkEl = document.querySelector(
  `.site-nav__link[href="${currentPageUrl}"]`
);
console.log(linkEl);

// повісили клас на current link
linkEl.classList.add('site-nav__link--current');
