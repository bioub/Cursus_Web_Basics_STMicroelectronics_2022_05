// function sum(a, b) {
//   let result = a + b;

//   for (let i = 2; i < arguments.length; i++) {
//     const arg = arguments[i];
//     result += arg;
//   }

//   return result;
// }

// REST Param
// conversion syntaxique
// d'une liste de valeur (ex: 4, 5)
// vers
// un tableau (ex: [4, 5])

function sum(a, b, ...args) {
  let result = a + b;

  for (const arg of args) {
    result += arg;
  }

  return result;
}

console.log(sum(2, 3, 4, 5));

// SPREAD Operator
// conversion syntaxique
// d'un tableau (ex: [4, 5])
// vers
// une liste de valeur (ex: 4, 5)

function multiply(a, b) {
  return a * b;
}

const nbs = [4, 5];
console.log(multiply(...nbs));

// Très utilisé pour cloner
const cloneArray = [...nbs];

// Très utilisé pour modifier un tableau de manière immuable
const newNbs = [1, 2, 3, ...nbs];


// const tmp = 'Romain Bohdanowicz'.split(' ');
// const prenom = tmp[0];
// const nom = tmp[1];

//    ['Rom' , 'Boh']
const [prenom, nom  ] = 'Romain Bohdanowicz'.split(' ');


const numbers = [1, 2, 3, 4, 5];

// combiné avec REST Param
//    [1  , 2  , 3, 4, 5  ]
const [one, two, ...others] = numbers;
console.log(others); // [3, 4, 5]

// combiné avec default
const [firstName, lastName = ''] = 'Romain'.split(' ');

const coords = {x: 1, y: 2};

// const valX = coords.x;
// const valY = coords.y;

//    {x: 1   , y: 2   }
const {x: valX, y: valY} = coords;

// combiné avec shortand property
// combiné avec default
const { x = 0, y = 0 } = coords;

// function Contact(name) {
//   this.name = name;
// }

// Contact.prototype.hello = function( ) {
//   return 'Hello ' + this.name;
// };

class Contact {
  constructor(name) {
    //if (name.length > 10) {
      this.name = name;
    //}
  }
  static getClass() {
    return 'Contact';
  }
  hello() {
    return 'Hello ' + this.name;
  }
}

console.log(typeof Contact); // function
console.log(typeof Contact.prototype.hello); // function

const romain = new Contact('Romain');
delete romain.name;
console.log(romain.name); // undefined

class Trainer extends Contact {
  constructor(name, speciality) {
    super(name);
    this.speciality = speciality;
  }
  hello() {
    return `${super.hello()} my speciality is ${this.speciality}`;
  }
}

const rom = new Trainer('Romain', 'JS');
console.log(rom.hello()); // Hello Romain my speciality is JS
