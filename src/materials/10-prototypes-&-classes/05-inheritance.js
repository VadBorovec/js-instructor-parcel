// Наследование
// - extends
// - super()

class Hero {
  constructor({ name = 'hero', xp = 0 } = {}) {
    this.name = name;
    this.xp = xp;
  }

  gainXp(amount) {
    console.log(`${this.name} gain ${amount} XP`);
    this.xp += amount;
  }
}

const mango = new Hero({ name: 'Mango', xp: 1000 });

console.log(mango);

mango.gainXp(1000);

console.log(mango);

class Warrior extends Hero {
  constructor({ weapon = 'no', ...restProps } = {}) {
    super(restProps);
    this.weapon = weapon;
  }

  attack() {
    console.log(`${this.name} attacs with ${this.weapon}`);
  }
}

class Berserk extends Warrior {
  constructor({ warcry, ...restProps } = {}) {
    super(restProps);

    this.warcry = warcry;
  }

  babyRange() {
    console.log(this.warcry);
  }
}

const lyon = new Berserk({
  name: 'Lyon',
  xp: 500,
  weapon: 'axe',
  warcry: 'waaaaa!',
});

console.log(lyon);
lyon.babyRange();
lyon.attack();
lyon.gainXp(1200);
console.log(lyon);

class Wizard extends Hero {
  constructor({ spells = [], ...restProps } = {}) {
    super(restProps);
    this.spells = spells;
  }

  cast() {
    console.log(`${this.name} spells with ${this.spells}`);
  }
}

const poly = new Warrior({ name: 'Poly', xp: 1000, weapon: 'alebarda' });

console.log(poly);
poly.attack();
poly.gainXp(1000);
console.log(poly);

const ajax = new Wizard({ name: 'Ajax', xp: 1000, spells: ['fireball'] });
ajax.cast();
ajax.gainXp(200);
console.log(ajax);

// console.log(poly.__proto__ === Warrior.prototype);
// console.log(Object.getPrototypeOf(poly) === Warrior.prototype); // same like previous
// console.log('Warrior.prototype', Warrior.prototype);
// console.log('Hero.prototype', Hero.prototype);

// poly.gainXp(1080);
// cca
// ascasc
// acaca
// acasc
// ascac
// accas
// cacasc
//cacasc
// CanvasC
