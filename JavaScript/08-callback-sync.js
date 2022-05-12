const names = ['Romain', 'Eric', 'Jean'];

// programmation impérative
const names4Letters1 = [];
for (const n of names) {
  if (n.length === 4) {
    names4Letters1.push(n);
  }
}

console.log(names4Letters1); // ['Eric', 'Jean']

// Depuis ES5, programmation fonctionnelle
const names4Letters2 = names.filter((n) => n.length === 4);
console.log(names4Letters2); // ['Eric', 'Jean']

// pile d'appels
// ^
// |
// |
// |for { cb - cb - cb }
// |filter                        
// +-------------------------------------------> temps
//
