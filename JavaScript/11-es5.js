'use strict';

const coords = {
  x: 1,
  y: 2,
};

Object.defineProperty(coords, 'visible', {
  value: true,
  writable: false,
  configurable: false,
  enumerable: false,
});

console.log(coords.visible); // true
// coords.visible = false; // en mode strict TypeError: Cannot assign to read only property 'visible' of object '#<Object>'
// console.log(coords.visible); // true

for (const key in coords) {
  console.log(key);
}

console.log(JSON.stringify(coords))

// recommandé par rapport au for .. in
for (const key of Object.keys(coords)) {
  console.log(key);
}

Object.preventExtensions(Math);

// TypeError: Cannot add property sum, object is not extensible
// Math.sum = (a, b) => a + b;
