/*
Напиши скрипт, який змінює кольори фону елемента < body > через інлайн - стиль
по кліку на button.change - color і виводить значення кольору в span.color.

<div class="widget">
  <p>Background color: <span class="color">-</span></p>
  <button type="button" class="change-color">Change color</button>
</div >
  
Для генерування випадкового кольору використовуй функцію getRandomHexColor.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
*/

// // ========================================================================================================
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorBtn = document.querySelector(".change-color");
const changColorSpan = document.querySelector(".color");

changeColorBtn.addEventListener("click", onChangeColorBtn);

function onChangeColorBtn(event) {
  document.body.style.background = getRandomHexColor();
  changColorSpan.textContent = getRandomHexColor();
}

// // ========================================================================================================

// const button = document.querySelector("button.change-color");
// const colorSpan = document.querySelector("span.color");

// button.addEventListener("click", () => {
//   const color = getRandomHexColor();
//   document.body.style.backgroundColor = color;
//   colorSpan.textContent = color;
// });

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }
