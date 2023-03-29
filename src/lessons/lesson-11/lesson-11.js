// const container = document.querySelector('#container');
// const container = document.getElementById('container');

// console.log(container);
// console.log(container.childNodes);
// console.log(container.children);

// ! ==========================================================================

//* 1. Створити список технологій ЩО вивчаються на курсі Fullstack за допомогою js
// Показати як це робиться через **тар** та **reduce**

const technologies = ['HTML', 'CSS', 'JavaScript', 'React', 'Node'];

/*
<ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
</ul>
*/

// //----------- for of ------------------

// const listEl = document.createElement('ul');
// // console.log(listEl);

// for (const technology of technologies) {
//   const liEl = document.createElement('li');

//   // // 1. var
//   // liEl.textContent = technology;
//   // // 2. var
//   const text = document.createTextNode(technology);
//   liEl.appendChild(text);

//   listEl.appendChild(liEl);
// }

// // console.log(listEl);

// // додає в самий кінець
// // document.body.appendChild(listEl);

// // додає у відповідний вузол
// const hero = document.querySelector('.hero');
// hero.after(listEl);

// element.append(el1, el2, ...) - додає один або декілька елементів після всіх дітей елемента element.
// element.prepend(el1, el2, ...) - додає один або декілька елементів перед усіма дітьми елемента element.
// element.after(el1, el2, ...) - додає один або декілька елементів після елемента element.
// element.before(el1, el2, ...) - додає один або декілька елементів перед елементом element.

// // ------- map --------------

// const markup = `<ul>${technologies
//   .map(technology => `<li>${technology}</li>`)
//   .join('')}</ul>`;
// // console.log(markup);

// додає в самий кінець
// document.body.insertAdjacentHTML('beforeend', markup);

// // додає у відповідний вузол
// const hero = document.querySelector('.hero');
// hero.insertAdjacentHTML('afterend', markup);

// //---------- reduce ------------

const markup = `<ul>${technologies.reduce(
  (acc, technology) => (acc += `<li>${technology}</li>`),
  ''
)}</ul>`;
// // console.log(markup);

// // додає у відповідний вузол
const hero = document.querySelector('.hero');
hero.insertAdjacentHTML('afterend', markup);

// ! ==========================================================================

//* 2. Створити кілька кнопок на основі масива 3 обектами використовуючи createElement

const colors = [
  {
    label: 'red',
    color: '#FF0000',
  },
  {
    label: 'green',
    color: '#00FF00',
  },
  {
    label: 'blue',
    color: '#0000FF',
  },
  {
    label: 'yellow',
    color: '#FFFF00',
  },
];

/*
<div>
    <button type='button' stye='someStyles'>red</button>
    <button type='button' stye='someStyles'>green</button>
    <button  type='button' stye='someStyles'>blue</button>
</div>
*/

// ----------- for of ------------------

const btnWrap = document.createElement('div');
btnWrap.style.display = 'flex';
btnWrap.style.alignItems = 'center';
btnWrap.style.justifyContent = 'center';
btnWrap.style.marginBottom = '1rem';
// btnWrap.style.flexDirection = 'column';
// btnWrap.style.alignContent = 'center';
console.log(btnWrap);

for (const { label, color } of colors) {
  const btn = document.createElement('button');
  btn.textContent = label;
  btn.type = 'button';
  btn.style.backgroundColor = color;
  btn.className = 'magic-btn';

  btnWrap.appendChild(btn);
}

// додає у відповідний вузол
// const hero = document.querySelector('.hero');
hero.after(btnWrap);

//  ------- map --------------

const btnWrapMap = document.createElement('div');
btnWrapMap.style.display = 'flex';
// btnWrapMap.style.alignItems = 'center';
btnWrapMap.style.justifyContent = 'center';
btnWrap.style.marginBottom = '1rem';
// btnWrapMap.style.flexDirection = 'column';
// btnWrapMap.style.alignContent = 'center';
console.log(btnWrapMap);

colors.map(({ label, color }) => {
  const btn = document.createElement('button');
  btn.textContent = label;
  btn.type = 'button';
  btn.style.backgroundColor = color;
  btn.className = 'back-btn';

  btnWrapMap.appendChild(btn);
});

btnWrap.after(btnWrapMap);
