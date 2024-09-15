class Animal {
  #name;
  #species;
  #energy;
  constructor(name, species, energy) {
    this.#name = name;
    this.#species = species;
    this.#energy = energy;
  }

  get name() {
    return this.#name;
  }

  set name(value) {
    this.#name = value;
  }
  get species() {
    return this.#species;
  }

  set species(value) {
    this.#species = value;
  }
  get energy() {
    return this.#energy;
  }

  set energy(value) {
    this.#energy = value;
  }

  canAttack(target, energyCost) {
    if (this.#energy > energyCost) {
      this.#energy -= energyCost;
      target.energy -= energyCost;
    } else {
      console.log(`${this.#name} doesn't have enough energy to attack ${target.name}`);
    }
  }
  attack(target, energyCost) {
    // The energy level of both parties will decrease 10.
    this.canAttack(target, energyCost);
  }

  eat() {
    //The energy level will increase 10.
    this.#energy += 10;
  }
}

class Bird extends Animal {
  #canFly;
  constructor(name, species, canFly) {
    super(name, species, 100);
    this.#canFly = canFly;
  }

  get canFly() {
    return this.#canFly;
  }

  set canFly(value) {
    this.#canFly = value;
  }

  attack(target) {
    // The energy level of both parties will decrease 20.
    super.attack(target, 20);
  }
}

class Mammal extends Animal {
  #furColor;
  constructor(name, species, furColor) {
    super(name, species, 200);
    this.#furColor = furColor;
  }

  get furColor() {
    return this.#furColor;
  }

  set furColor(value) {
    this.#furColor = value;
  }

  attack(target) {
    // The energy level of both parties will decrease 50.
    super.attack(target, 50);
  }
  eat() {
    //The energy level will increase 20.
    this.energy += 20;
  }
}

class Reptile extends Animal {
  #coldBlooded;
  constructor(name, species, coldBlooded) {
    super(name, species, 100);
    this.#coldBlooded = coldBlooded;
  }

  get coldBlooded() {
    return this.#coldBlooded;
  }

  set coldBlooded(value) {
    this.#coldBlooded = value;
  }

  attack(target) {
    // The energy level of both parties will decrease 30.
    super.attack(target, 30);
  }
  eat() {
    //The energy level will increase 15.
    this.energy += 15;
  }
}

const eagle = new Bird("Eagle", "Bird of Prey", true);
console.log(
  `Name: ${eagle.name}, Species: ${eagle.species}, Can Fly: ${eagle.canFly}`
);

const lion = new Mammal("Lion", "Big Cat", "Golden");
console.log(
  `Name: ${lion.name}, Species: ${lion.species}, Fur Color: ${lion.furColor}`
);

const snake = new Reptile("Snake", "Serpent", true);
console.log(
  `Name: ${snake.name}, Species: ${snake.species}, Cold-Blooded: ${snake.coldBlooded}`
);
console.log(lion.energy); //200
console.log(eagle.energy);  //100
eagle.attack(lion); 
console.log(lion.energy); //180
console.log(eagle.energy); //80
lion.attack(eagle); 
console.log(lion.energy); //130
console.log(eagle.energy); //30
eagle.eat();
lion.eat();
snake.eat();
console.log(snake.energy); // 100 + 15
