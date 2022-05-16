'use strict';
// en mode strict : this ici vaut undefined
// en mode sloppy (non-strict) : this ici est l'objet global

globalThis.name = 'Romain (global object)';

const contact = {
  name: 'Romain (contact object)',
};

function hello(name1, name2) {
  return `Hello ${name1}, hello ${name2} my name is ${this.name}`;
}

// const hello = (name1, name2) => {
//   return `Hello ${name1}, hello ${name2} my name is ${this.name}`;
// }

// console.log(hello('Jean', 'Eric'));

// function Coords(x, y) {
//   this.x = x;
//   this.y = y;
// }

// const coords = Coords(1, 2);
// console.log(coords); // undefined
// console.log(x); // 1
// console.log(y); // 2


console.log(hello.call(contact, 'Jean', 'Eric'));
console.log(hello.apply(contact, ['Jean', 'Eric']));
console.log(hello.call(contact, ...['Jean', 'Eric']));

// ES5 bind
const contactHello = hello.bind(contact);
console.log(contactHello('Jean', 'Eric'));

function bind(fct, thisArg) { // thisArg est sauvegardé par la closure
  return function() {
    return fct.apply(thisArg, arguments);
  }
}

const myContactHello = bind(hello, contact);
console.log(myContactHello('Jean', 'Eric'));



// function returnArgCountLowerThan10() {
//   let count = 0;

//   for (const arg of arguments) {
//     if (arg < 10) {
//       count++
//     }
//   }

//   return count;
// }

function returnArgCountLowerThan10() {
  // return Array.prototype.filter.call(arguments, (arg) => arg < 10).length
  return Array.from(arguments).filter((arg) => arg < 10).length
}

console.log(returnArgCountLowerThan10(1, 20, 5, 8, 35));

// for (const key in object) {
//   if (Object.hasOwnProperty.call(object, key)) {
//     const element = object[key];
//   }
// }
