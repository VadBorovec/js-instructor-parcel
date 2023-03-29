/*
 * Типы событий: keypress, keydown, keyup
 * - Ограничения keypress
 * - Свойства KeyboardEvent.key и KeyboardEvent.code
 */

const refs = {
  output: document.querySelector('.js-output'),
  clearBtn: document.querySelector('.js-clear'),
};

// реагує на нажаття всіх клавіш
window.addEventListener('keydown', onKeypress);
// реагє на нажаття клавіш букв цифр та спецсимволів
window.addEventListener('keypress', onKeypress);
refs.clearBtn.addEventListener('click', onClearOutput);

function onKeypress(event) {
  console.log('event.key: ', event.key);
  console.log('event.code: ', event.code);

  refs.output.textContent += event.key;
}

function onClearOutput() {
  refs.output.textContent = '';
}
