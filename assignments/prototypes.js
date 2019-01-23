/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/
  
/*
  === GameObject ===
  * createdAt
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method -> returns the string: 'Object was removed from the game.'
*/
// Constructor Function:
function GameObject(attributes) {
  this.createdAt = attributes.createdAt;
  this.dimensions = attributes.dimensions;
}
GameObject.prototype.destroy = function () {
  return 'Object was removed from the game.'
}
/*
=== CharacterStats ===
* healthPoints
* name
* takeDamage() // prototype method -> returns the string '<object name> took damage.'
* should inherit destroy() from GameObject's prototype
*/
//Constructor Function:
function CharacterStats(stats) {
  GameObject.call(this, stats);
  this.healthPoints  = stats.healthPoints;
  this.name = stats.name;
}
CharacterStats.prototype = Object.create(GameObject.prototype);
CharacterStats.prototype.takeDamage = function () {
  return `${this.name} took damage.`;
}
/*
=== Humanoid (Having an appearance or character resembling that of a human.) ===
* team
* weapons
* language
* greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
* should inherit destroy() from GameObject through CharacterStats
* should inherit takeDamage() from CharacterStats
*/
//Constructor Function:
function Humanoid(type) {
   CharacterStats.call(this, type);
   this.team = type.team;
   this.weapons = type.weapons;
   this.language = type.language;
}
Humanoid.prototype = Object.create(CharacterStats.prototype);
Humanoid.prototype.greet = function () {
  return `${this.name} offers a greeting in ${this.language}.`;
}
/*
* Inheritance chain: GameObject -> CharacterStats -> Humanoid
* Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
* Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by un-commenting these 3 objects and the list of console logs below:


const mage = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1,
  },
  healthPoints: 5,
  name: 'Bruce',
  team: 'Mage Guild',
  weapons: [
    'Staff of Shamalama',
  ],
  language: 'Common Tongue',
});

const swordsman = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2,
  },
  healthPoints: 15,
  name: 'Sir Mustachio',
  team: 'The Round Table',
  weapons: [
    'Giant Sword',
    'Shield',
  ],
  language: 'Common Tongue',
});

const archer = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4,
  },
  healthPoints: 10,
  name: 'Lilith',
  team: 'Forest Kingdom',
  weapons: [
    'Bow',
    'Dagger',
  ],
  language: 'Elvish',
});

console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints); // 15
console.log(mage.name); // Bruce
console.log(swordsman.team); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.


// Stretch task: 
// * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
// * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
// * Create two new objects, one a villain and one a hero and fight it out with methods!
/*
//Hero Constructor Function:
function Hero(goodKarma) {
  Humanoid.call(this, goodKarma);
  this.power = goodKarma.power;
  this.speed = goodKarma.speed;
  this.stamina = goodKarma.stamina;
  this.intelligence = goodKarma.intelligence; 
}
Hero.prototype = Object.create(Humanoid.prototype);
Hero.prototype.justice = function () {
 return `${this.name} inflicts ${6} damage on opponent.`;
}
//Villian Constructor Function:
function Villian(badKarma) {
  Humanoid.call(this, badKarma);
  this.power = badKarma.power;
  this.speed = badKarma.speed;
  this.stamina = badKarma.stamina;
  this.intelligence = badKarma.intelligence;
}
Villian.prototype = Object.create(Humanoid.prototype);
Villian.prototype.manipulate = function () {
 return `${this.name} inflicts ${5} damage on opponent.`;
}
//Heroes and Villians
const hero1 = new Hero({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 3,
    height: 5,
  },
  healthPoints: 21,
  name: 'Angel Diamond',
  team: 'Angelic Heavens',
  weapons: [
    'Thunderbolt',
    'Super Soaker',
  ],
  language: 'Angelic Greek',
});
const villian1 = new Villian({
  createdAt: new Date(),
  dimensions: {
    length: 3,
    width: 2,
    height: 8,
  },
  healthPoints: 31,
  name: 'Demonic Carbon ',
  team: 'Abyssal Trench',
  weapons: [
    'Flamethrower',
    'Nerf Gun',
  ],
  language: 'Demonic Tongues',
});
*/