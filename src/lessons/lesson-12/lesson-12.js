/*
 TASK
1. Створити модальне вікно яке буде відкриватися при кліку на кнопку всередині тега body.
Модальне вікно має закриватися при кліку на напівпрозорий оверлей, та на іконку хрестика
всередині модалки
2. Додати В модалку логіку закриття при натисканні на кнопку Escape
*/

// const overlay = document.getElementById('overlay');
// const modalWindow = document.getElementById('modalWindow');
// const closeBtn = document.getElementById('closeBtn');
// const openBtn = document.getElementById('openBtn');

const refs = {
  overlay: document.getElementById('overlay'),
  modalWindow: document.getElementById('modalWindow'),
  closeBtn: document.getElementById('closeBtn'),
  openBtn: document.getElementById('openBtn'),
};

const classes = {
  openModal: 'open-modal',
};

refs.openBtn.addEventListener('click', handleModal);
refs.closeBtn.addEventListener('click', handleModal);
refs.overlay.addEventListener('click', handleModal);
document.addEventListener('keydown', handleModalClose);

function handleModal(event) {
  document.body.classList.toggle(classes.openModal);
}

function handleModalClose({ code }) {
  console.log(code);
  if (code === 'Escape') {
    document.body.classList.remove(classes.openModal);
  }

  //   // 2 var - worse
  //   if (code === 'Escape' && document.body.classList.contains(classes.openModal))
  //     handleModal();
}

// ------------------------------------------------------------------------------------------
// task with LINK

const link = document.getElementById('link');
console.log(link);

link.addEventListener('click', handleClick, {
  // capture - поки не розглядаємо
  once: true, // подія одноразова
  passive: false, // true - забороняе використання preventDefault();
});

function handleClick(event) {
  event.preventDefault();
  console.log('Hey');
}

// // (onclick, onfocus, onchange ...) - аналог addEventListener
// link.onclick = event => {
//   event.preventDefault();
//   console.log('hello');
//   // відміняє подію preventDefault();
//   link.onclick = null;
// };

// // ------------------------------------------------------------------------------------------
