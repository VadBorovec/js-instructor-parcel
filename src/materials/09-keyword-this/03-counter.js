// // Counter

const counter = {
  value: 0,
  increment() {
    // console.log('increment -> this', this);
    this.value += 1;
  },
  decrement() {
    // console.log('decrement -> this', this);
    this.value -= 1;
  },
};

// console.log(document);

const decrementBtn = document.querySelector('.js-decrement');

const incrementBtn = document.querySelector('.js-increment');

const valueEl = document.querySelector('.js-value');

// console.log(decrementBtn);
// console.log(incrementBtn);
// console.log(valueEl);

decrementBtn.addEventListener('click', function () {
  console.log('Click on decrementBtn');
  counter.decrement();
  valueEl.textContent = counter.value;
});

incrementBtn.addEventListener('click', function () {
  console.log('Click on incrementBtn');
  counter.increment();
  valueEl.textContent = counter.value;
});

// ==========================================================================
const updateCounter = function (value, operation) {
  operation(value);
};

updateCounter(10, counter.increment.bind(counter));
updateCounter(5, counter.decrement.bind(counter));

console.log(counter); // 0 -> increment 10 -> decrement 5 = 5

// *
