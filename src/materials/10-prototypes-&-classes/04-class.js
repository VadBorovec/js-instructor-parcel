const Car = function ({ brand, model, price } = {}) {
  this.brand = brand;
  this.model = model;
  this.price = price;
};

Car.prototype.changePrice = function (newPrice) {
  this.price = newPrice;
};

Car.description = 'Класс описывающий автомобиль';

Car.logInfo = function (car0bj) {
  console.log('Car logInfo -> carObj', car0bj);
};

const car = new Car({
  brand: 'Audi',
  model: 'Q3',
  price: 35000,
});

// ==============================================================

// Классы
// - объявление
// - конструктор
// - методы
// - static
// - приватные свойства
// - синтаксис публичных свойства и методы классов
// - геттеры и сеттеры

class Car1 {
  static AAA = 'Класс описывающий автомобиль'; // ststic property
  static logInfo() {
    console.log('Car logInfo -> carObj', car0bj);
  }
  #test = 'test'; // private property
  mySuperPublicField = 'Public Field'; // public field

  constructor({ brand, model, price } = {}) {
    // console.log('done constructor');
    this._brand = brand;
    this._model = model;
    this._price = price;
  }
  changePrice(newPrice) {
    this.price = newPrice;
  }

  get brand() {
    return this._brand;
  }

  set brand(newBrand) {
    this._brand = newBrand;
  }

  get model() {
    return this._model;
  }

  set model(newModel) {
    this._model = newModel;
  }

  get price() {
    return this._price;
  }

  set price(newPrice) {
    this._price = newPrice;
  }
}

console.log(Car1);

const carInstance = new Car1({
  brand: 'Audi',
  model: 'Q3',
  price: 35000,
});

console.log(Object.getPrototypeOf(carInstance));
console.log(carInstance);

carInstance.model = 'Q4';
console.log(carInstance);

carInstance.price = 50000;
console.log(carInstance);
