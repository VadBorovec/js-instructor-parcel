/*
Напиши скрипт створення і очищення колекції елементів.Користувач вводить
кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція.
Натисненням на кнопку Очистити, колекція елементів очищається.

<div id="controls">
  <input type="number" min="1" max="100" step="1" />
  <button type="button" data-create>Create</button>
  <button type="button" data-destroy>Destroy</button>
</div>

<div id="boxes"></div>

Створи функцію createBoxes(amount), яка приймає один параметр - число.Функція створює стільки < div >,
скільки вказано в amount і додає їх у div#boxes.

Розміри найпершого <div> - 30px на 30px.
Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
Всі елементи повинні мати випадковий колір фону у форматі HEX.Використовуй готову функцію
getRandomHexColor для отримання кольору.

Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.
*/

// // ========================================================================================================

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.querySelector('#controls');
const input = controls.querySelector('input');
const createBtn = controls.querySelector('button[data-create]');
const destroyBtn = controls.querySelector('button[data-destroy]');
const boxes = document.querySelector('#boxes');

createBtn.addEventListener('click', () => {
  const amount = input.value;
  createBoxes(amount);
});

destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  let size = 30;
  for (let i = 0; i < amount; i++) {
    const div = document.createElement('div');
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = getRandomHexColor();
    boxes.appendChild(div);
    size += 10;
  }
}

function destroyBoxes() {
  boxes.innerHTML = '';
}

// // ========================================================================================================


// const createBtn = document.querySelector('[data-create]');
// const destroyBtn = document.querySelector('[data-destroy]');
// const boxesDiv = document.querySelector('#boxes');

// createBtn.addEventListener('click', createBoxes);
// destroyBtn.addEventListener('click', destroyBoxes);

// function createBoxes() {
//   const amount = Number(document.querySelector('input').value);

//   let boxes = '';
//   let size = 30;

//   for (let i = 0; i < amount; i++) {
//     const color = getRandomHexColor();
//     boxes += `<div style="width: ${size}px; height: ${size}px; background-color: ${color};"></div>`;
//     size += 10;
//   }

//   boxesDiv.innerHTML = boxes;
// }

// function destroyBoxes() {
//   boxesDiv.innerHTML = '';
// }

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }
