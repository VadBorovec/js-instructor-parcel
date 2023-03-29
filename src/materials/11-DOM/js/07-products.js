import products from './data/products.js';

// console.log(products);

/*
 * Создаём карточку продукта
 * - В классе продукта может быть product--on-sale product--not-available
 */

// =======================================================================================
// const product = {
//   name: 'Сервоприводы',
//   description:
//     'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa eius deleniti dolor facilis consectetur laborum aperiam exercitationem quam hic natus.',
//   price: 2000,
//   available: true,
//   onSale: true,
// };

/*
<article class="product">
  <h2 class="product__name">Название</h2>
  <p class="product__descr">Описание</p>
  <p product__pridct>Цена: 1111 кредитов</p>
</article>
*/

//* Пишем функцию для создания карточки продукта

//* 1st variant
// const productEl = document.createElement('article');
// console.log(productEl);
// productEl.classList.add('product');

// const nameEl = document.createElement('h2');
// console.log(nameEl);
// nameEl.textContent = product.name;
// nameEl.classList.add('product__name');

// const descrEl = document.createElement('p');
// console.log(descrEl);
// descrEl.textContent = product.description;
// descrEl.classList.add('product__descr');

// const priceEl = document.createElement('p');
// console.log(priceEl);
// priceEl.textContent = `Цена: ${product.price} кредитов`;
// priceEl.classList.add('product__price');

// productEl.append(nameEl, descrEl, priceEl);

// console.log(productEl);

// ====================================================================

//* Создаём карточку продукта
// * - В классе продукта может быть product--on-sale product--not-available

//* 2nd variant with function
const productsContainerEl = document.querySelector('.js-products');

const makeProductCard = ({ name, description, price }) => {
  const productEl = document.createElement('article');
  productEl.classList.add('product');

  const nameEl = document.createElement('h2');
  nameEl.textContent = name;
  nameEl.classList.add('product__name');

  const descrEl = document.createElement('p');
  descrEl.textContent = description;
  descrEl.classList.add('product__descr');

  const priceEl = document.createElement('p');
  priceEl.textContent = `Цена: ${price} кредитов`;
  priceEl.classList.add('product__price');

  productEl.append(nameEl, descrEl, priceEl);

  return productEl;
};

const elements = products.map(makeProductCard);

console.log(elements);
productsContainerEl.append(...elements);
