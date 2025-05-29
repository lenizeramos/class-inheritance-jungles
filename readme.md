> **Note:** This repository is a personal backup of coursework originally developed as part of my studies at Cornerstone College. It was cloned from a institutional and private repository to preserve my contributions and development history.

# Inheritance Assignments - Jungles


**Objective**: Create a base class called `Animal` with properties like `name`, `species` and `energy`. Then, create subclasses like `Bird`, `Mammal`, and `Reptile` that inherit from `Animal`. Add specific properties and methods to each subclass, like `fly()` for `Bird`, `furColor()` for `Mammal`, and `isColdBlooded()` for `Reptile`. Add the attack and eat method for each.

#### Base Class: Animal

- **Properties**:
  - `name` (string): The name of the animal.
  - `species` (string): The species of the animal.
  - `energy` (integer): The power of the animal

- **Getters and Setters**:
  - for all properties like below:
    - `getName()` or `get name()`
    - `setName()` or `set name()`
    - `getSpecies()` or `get species()`
    - `setSpecies()` or `set species()`
    - `getEnergy()` or `get energy()`
    - `getEnergy()` or `set energy()`

- **Methods**:
  - `attack()`: The energy level of both parties will decrease 10.
  - `eat()`: The energy level will increase 10.

#### Subclass: Bird (inherits from Animal)

- **Properties**:
  - `energy` for bird is 100 as default.
  - `canFly` (boolean): Indicates whether the bird can fly or not.
  
- **Getters and Setters**:
  - for all properties

- **Methods**:
  - `attack()`: The energy level of both parties will decrease 20.
  - `eat()`: The energy level will increase 10.

#### Subclass: Mammal (inherits from Animal)

- **Properties**:
  - `energy` for mammal is 200 as default.
  - `furColor` (string): The color of the mammal's fur.

  - **Getters and Setters**:
  - for all properties

- **Methods**:
  - `attack()`: The energy level of both parties will decrease 50.
  - `eat()`: The energy level will increase 20;

#### Subclass: Reptile (inherits from Animal)

- **Properties**:
  - `energy` for reptile is 100 as default.
  - `coldBlooded` (boolean): Indicates whether the reptile is cold-blooded or not.

  - **Getters and Setters**:
  - for all properties
  

- **Methods**:
  - `attack()`: The energy level of both parties will decrease 30.
  - `eat()`: The energy level will increase 15.

#### Example Usage:

```js
// Create instances of the subclasses and use their properties and methods.

// Example Usage
const eagle = new Bird("Eagle", "Bird of Prey", true);
console.log(`Name: ${eagle.name}, Species: ${eagle.species}, Can Fly: ${eagle.canFly}`);

const lion = new Mammal("Lion", "Big Cat", "Golden");
console.log(`Name: ${lion.name}, Species: ${lion.species}, Fur Color: ${lion.furColor}`);

const snake = new Reptile("Snake", "Serpent", true);
console.log(`Name: ${snake.name}, Species: ${snake.species}, Cold-Blooded: ${snake.coldBlooded}`);

eagle.attack(lion);
```

- Follow these requirements to create the base class and subclasses with their respective properties, methods, and example usage.

- You can add validations to check if the energy level is sufficient before each attack. 

- Refactor the design pattern to avoid duplications.
