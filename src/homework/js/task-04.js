// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

// <div id="counter">
//   <button type="button" data-action="decrement">
//     -1
//   </button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">
//     +1
//   </button>
// </div>;

// - Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// - Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// - Оновлюй інтерфейс новим значенням змінної counterValue.

// ============================================================================================================

const refs = {
  btnDecr: document.querySelector('[data-action="decrement"]'),
  btnIncr: document.querySelector('[data-action="increment"]'),
  valueEl: document.querySelector("#value"),
};

refs.btnDecr.addEventListener("click", onBtnDecrClick);
refs.btnIncr.addEventListener("click", onBtnIncrClick);

function onBtnDecrClick(event) {
  refs.valueEl.textContent = Number(refs.valueEl.textContent) - 1;
  // console.log("click on -> btnDecr");
}

function onBtnIncrClick(event) {
  refs.valueEl.textContent = Number(refs.valueEl.textContent) + 1;
  // console.log("click on -> btnIncr");
}

// // ============================================================================================================
// // 2nd option

// const counter = document.querySelector("#counter");
// const counterValue = document.querySelector("#value");
// let currentValue = 0;

// counter.addEventListener("click", (event) => {
//   if (event.target.dataset.action === "increment") {
//     currentValue += 1;
//   } else if (event.target.dataset.action === "decrement") {
//     currentValue -= 1;
//   }
//   counterValue.textContent = currentValue;
// });
