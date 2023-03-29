// приклад викоистання функції _.sum з бібліотеки Lodash
// const sum = _.sum([4, 2, 8, 6]);
// console.log(sum);

// * _throttle(func, [wait=0], [options = {}]) з бібліотеки Lodash

const otuputScrollStandart = document.getElementById('otuputScrollStandart');
const otuputScrollThrottled = document.getElementById('otuputScrollThrottled');

// let scrollCounter = 0;

// document.addEventListener('scroll', () => {
//   scrollCounter += 1;
//   otuputScrollStandart.textContent = scrollCounter;
//   console.log('scroll');
// });

const scrollCounter = {
  standart: 0,
  throttle: 0,
};

document.addEventListener('scroll', onStandartScroll);

document.addEventListener(
  'scroll',
  _.throttle(() => {
    scrollCounter.throttle += 1;
    otuputScrollThrottled.textContent = scrollCounter.throttle;
  }, 500)
);

function onStandartScroll() {
  scrollCounter.standart += 1;
  otuputScrollStandart.textContent = scrollCounter.standart;
}

// ! =============================================================

// * _throttle(func, [wait=0], [options = {}]) з бібліотеки Lodash

const otuputResizeStandart = document.getElementById('otuputResizeStandart');
const otuputResizeThrottled = document.getElementById('otuputResizeThrottled');

const resizeCounter = {
  standart: 0,
  throttle: 0,
};

window.addEventListener('resize', onStandartResize);

window.addEventListener(
  'resize',
  _.throttle(() => {
    resizeCounter.throttle += 1;
    otuputResizeThrottled.textContent = resizeCounter.throttle;
  }, 500)
);

function onStandartResize() {
  resizeCounter.standart += 1;
  otuputResizeStandart.textContent = resizeCounter.standart;
}

// ! =============================================================
// приховує Counter при натисенні на Magic Button

const magicBtn = document.querySelector('.magic-btn');
const counters = document.querySelectorAll('.counter');

magicBtn.addEventListener('click', onMagicBtnClick);

function onMagicBtnClick(event) {
  counters.forEach(counter => {
    counter.classList.toggle('visual-hidden');
  });
}

// ! =============================================================
//* _.debounce(func, [wait=0], [options = {}])

// _.debounce also accepts three parameters:

// func (Function): The function to debounce.
// [wait=0] (number): The number of milliseconds to delay before invoking the debounced function.
// [options={}] (Object): The options object.
// [leading=false] (boolean): Specify invoking on the leading edge of the timeout.
// [trailing=true] (boolean): Specify invoking on the trailing edge of the timeout.

const nameInput = document.getElementById('nameInput');

nameInput.addEventListener(
  'input',
  _.debounce(() => console.log(nameInput.value), 1000, {
    leading: true, // на початку
    trailing: false, // у кінці
  })
);

// ! =============================================================
// Написати форму логіна та пароля де буде відбуватися валідація полів на довжину
// після закінчення введення тексту. (Використати дебаунс)

const signInForm = document.getElementById('signInForm');
const loginInput = document.getElementById('loginInput');
const passwordInput = document.getElementById('passwordInput');

const classes = {
  correct: 'correct',
  wrong: 'wrong',
};

signInForm.addEventListener(
  'input',
  _.debounce(({ target }) => {
    const inputLength = target.value.trim().length;

    if (inputLength === 0) {
      target.classList.remove(classes.correct);
      target.classList.remove(classes.wrong);
    } else if (inputLength >= 5 && inputLength <= 10) {
      target.classList.add(classes.correct);
      target.classList.remove(classes.wrong);
    } else {
      target.classList.add(classes.wrong);
      target.classList.remove(classes.correct);
    }

    // inputLength >= 5 && inputLength <= 10
    //   ? (target.className = classes.correct)
    //   : (target.className = classes.wrong);
  }, 1000)
);
