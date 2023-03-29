// HTML містить порожній список ul#ingredients.

// <ul id="ingredients"></ul>

// JavaScript містить масив рядків.

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// Напиши скрипт, який для кожного елемента масиву ingredients:

// 1. Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// 2. Додасть назву інгредієнта як його текстовий вміст.
// 3. Додасть елементу клас item.
// 4. Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

// ==========================================================================================================

const makeIngridientsList = (options) => {
  return options.map((option) => {
    const ingridientEl = document.createElement("li");

    ingridientEl.textContent = option;
    ingridientEl.classList.add("item");

    return ingridientEl;
  });
};

const ingredientsList = document.querySelector("#ingredients");

ingredientsList.append(...makeIngridientsList(ingredients));

// // ==========================================================================================================
// // 2nd option

// const ul = document.getElementById("ingredients");
// const liElements = ingredients.map((ingredient) => {
//   const li = document.createElement("li");
//   li.textContent = ingredient;
//   li.classList.add("item");
//   return li;
// });
// ul.append(...liElements);
