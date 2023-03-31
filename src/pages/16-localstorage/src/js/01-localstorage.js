const user = {
  name: 'mango',
  age: 2,
};

// * JSON.stringify() make string
console.log(JSON.stringify(user));

const savedUserData = '{"name":"mango","age":2}';
// * JSON.parse() parse string to object
console.log(JSON.parse(savedUserData));

// !===============================

// * localstorage
console.log(localStorage);

// * method setItem()
localStorage.setItem('my-data', JSON.stringify({ name: 'Mango', age: 2 }));

// * method getItem()
const savedData = localStorage.getItem('my-data');
console.log('savedData', savedData);

const parsedData = JSON.parse(savedData);
console.log('parsedData', parsedData);

// * methods remove(), clear() etc.
