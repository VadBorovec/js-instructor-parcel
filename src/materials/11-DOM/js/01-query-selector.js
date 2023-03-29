const magicBtn = document.querySelector('.js-magic-btn');
console.log(magicBtn);

// // document.querySelector(setector) и document.querySelectorAll(selector)
// // selector - любой валидный СЅЅ - селектор

// // Что возврашают ?

const navEl = document.querySelector('.site-nav');
console.log(navEl);

magicBtn.addEventListener('click', () => {
  const navLinksEl = document.querySelectorAll('.site-nav__link');
  console.log('navLinksEl', navLinksEl);
});

// // Document.querySelector* и Element.querySelector*
