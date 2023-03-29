// ======================================================================
// HTML for script

// <!-- Siema - Cool plugins -->
// <div id="counter-1">
//     <button data-decrement>-10</button>
//     <span data-value>0</span>
//     <button data-increment>+10</button>
// </div>
// <div id="counter-2">
//     <button data-decrement>-2</button>
//     <span data-value>0</span>
//     <button data-increment>+2</button>
// </div>

// ======================================================================

// SCRIPT BELOW

const CounterPlugin = function ({
  rootSelector,
  initialValue = 0,
  step = 1,
} = {}) {
  this._rootSelector = rootSelector;
  this._value = initialValue;
  this._step = step;

  this._refs = this._getRefs(rootSelector);

  this._bindEvents();
  this.updateValueUI();
};

CounterPlugin.prototype._getRefs = function (rootSelector) {
  const refs = {};
  refs.container = document.querySelector(rootSelector);
  refs.incrementBtn = refs.container.querySelector('[data-increment]');
  refs.decrementBtn = refs.container.querySelector('[data-decrement]');
  refs.valueEl = refs.container.querySelector('[data-value]');
  //   console.log(refs.incrementBtn);
  //   console.log(refs.decrementBtn);
  //   console.log(refs.valueEl);

  return refs;
};

CounterPlugin.prototype._bindEvents = function () {
  this._refs.incrementBtn.addEventListener('click', () => {
    console.log('CounterPlugin.prototype._bindEvents -> this', this);
    this.increment();
    this.updateValueUI();
  });
  this._refs.decrementBtn.addEventListener('click', () => {
    console.log('CounterPlugin.prototype._bindEvents -> this', this);
    this.decrement();
    this.updateValueUI();
  });
};

CounterPlugin.prototype.updateValueUI = function () {
  this._refs.valueEl.textContent = this._value;
};

CounterPlugin.prototype.increment = function () {
  this._value += this._step;
};

CounterPlugin.prototype.decrement = function () {
  this._value -= this._step;
};

const counter1 = new CounterPlugin({
  rootSelector: '#counter-1',
  step: 10,
  initialValue: 100,
});
// console.log(' counter1:', counter1);

const counter2 = new CounterPlugin({
  rootSelector: '#counter-2',
  step: 2,
});
// console.log('counter2:', counter2);

// console.log(counter);
// counter.increment();
// counter.increment();
// counter.increment();
// counter.decrement();
// console.log(counter);
