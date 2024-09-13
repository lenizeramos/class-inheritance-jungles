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
  set name(name) {
    this.#name = name;
  }
  get species() {
    return this.#species;
  }
  set species(species) {
    this.#species = species;
  }
  get energy() {
    return this.#energy;
  }
  set energy(energy) {
    this.#energy = energy;
  }

  attack(target, amount) {
    // The energy level of both parties will decrease 10.
    this.#energy -= amount;
    target.energy -= amount;
  }
  eat() {
    this.#energy += 10;
  }
}

class Bird extends Animal {
  #canFly;

  constructor(name, species, canFly) {
    super(name, species, 100); // I'm passing the energy, for bird is 100 as default.
    this.#canFly = canFly;
  }

  get canFly() {
    return this.#canFly;
  }
  set canFly(canFly) {
    this.#canFly = canFly;
  }

  attack(target) {
    // The energy level of both parties will decrease 20.
    this.energy -= 20;
    target.energy -= 20;
  }

}

class Mammal extends Animal {
  #furColor;

  constructor(name, species, furColor) {
    super(name, species, 200); // I'm passing the energy, for mammal is 200 as default.
    this.#furColor = furColor;
  }

  get furColor() {
    return this.#furColor;
  }
  set furColor(furColor) {
    this.#furColor = furColor;
  }

  attack(target) {
    // The energy level of both parties will decrease 50.
    this.energy -= 50;
    target.energy -= 50;
  }
  eat() {
    this.energy += 20;
  }
}

class Reptile extends Animal {
  #coldBlooded;

  constructor(name, species, coldBlooded) {
    super(name, species, 100); // I'm passing the energy, for reptile is 100 as default.
    this.#coldBlooded = coldBlooded;
  }

  get coldBlooded() {
    return this.#coldBlooded;
  }
  set coldBlooded(coldBlooded) {
    this.#coldBlooded = coldBlooded;
  }
  attack(target) {
    // The energy level of both parties will decrease 10.
    this.energy -= 30;
    target.energy -= 30;
  }
  eat() {
    this.energy += 15;
  }
}

const animal1 = new Animal("pretinha", "canina", 3);


const eagle = new Bird("Eagle", "Bird of Prey", true);


const lion = new Mammal("Lion", "Big Cat", "Golden");


const snake = new Reptile("Snake", "Serpent", true);


//eagle.attack(lion)


/* const animal1 = new Animal("pretinha", "canina", 3);
console.log(animal1);

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

eagle.attack(lion)
console.log(eagle.energy);
console.log(lion.energy); */