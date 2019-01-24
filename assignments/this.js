/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding:  a global and default binding to the Window when using the, this, keyword.
* 2. Implicit Binding: An automatic object oriented binding that binds to the object left of the method you invoke.
* 3. Explicit Binding: initialized with the use of .call(), .apply(), or .bind(), to directly bind a function to specified "this" content.
* 4. New Binding: Used to create new objects by applying "this" binding to a constructor function.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function favActivity(activity) {
    console.log(this);
    return activity;
}
favActivity('Guitar')

// Principle 2

// code example for Implicit Binding
const myExample = {
    Introduction: 'Hey man! :)',
    Introduce: function (name) {
        console.log(`${this.Introduction} I am ${name}`);
    }
};
myExample.Introduce('Josh')
// Principle 3

// code example for New Binding
// Constructor Function:
function Rockstar(name, instrument, band) {
    this.greeting = "What's Up?!";
    this.name = name;
    this.instrument = instrument;
    this.band = band;
    this.introduceMyself = function () {
        console.log(`${this.greeting}, I'm ${this.name} and I play ${this.instrument} for the band ${this.band}.`)
    }
}
    const slash = new Rockstar('Slash', 'Guitar', 'Guns N Roses');
    const tBarker = new Rockstar('Travis Barker', 'Drums', 'Blink-182');
    const flea = new Rockstar('Flea', 'Bass', 'The Red Hot Chili Peppers');
    slash.introduceMyself();
    tBarker.introduceMyself();
    flea.introduceMyself();
// Principle 4

// code example for Explicit Binding
const dog = {
    name: 'Remy',
}
const favorites = ['arguing with the doorbell', 'eating cookies', 'sleeping on the floor'];
function animal(favThing1, favThing2, favThing3){
    console.log(`Woof! My name is ${this.name} and a few of my favorite things to do consist of ${favThing1}, ${favThing2}, and ${favThing3}.`);
}
animal.apply(dog, favorites);