// Quelques objets globaux

// Du langage
console.log('typeof Math', typeof Math); // object
console.log('typeof JSON', typeof JSON); // object

// De Node.js
console.log('typeof process', typeof process); // object

// Du navigateur
console.log('typeof window', typeof window); // object
console.log('typeof document', typeof document); // object
console.log('typeof navigator', typeof navigator); // object

// Commun au navigateur et Node.js
console.log('typeof console', typeof console); // object

// Modèle objet de JS est dynamique (dictionnaire)
// on peut éditer le contenu de l'objet après sa création

// Extensibilité
console.log('Math.sum', Math.sum); // undefined

// Math.sum = function(a, b) {
//   return a + b;
// };
Math.sum = (a, b) => a + b;
console.log('Math.sum(1, 2)', Math.sum(1, 2)); // 3

// Modifier des clés/valeurs
Math.sum = (a, b) => Number(a) + Number(b);
console.log('Math.sum("1", "2")', Math.sum("1", "2")); // 3

// Supprimer des clés
delete Math.sum;
console.log('Math.sum', Math.sum); // undefined

// Mauvaise pratique d'étendre des objets qu'on a pas créé
// (objets globaux, Math..., bibliothèque externe)

// 2 syntaxe pour accéder au contenu de l'objet
console.log('Math.PI', Math.PI)
console['log']('Math["PI"]', Math["PI"])

// les crochets sont plus dynamiques
const logMethod = 'log';
const key = 'PI';
console[logMethod]('Math[logMethod]', Math[key])

// On peut créer un objet avec une syntaxe litéral
// - plus directe, à utilser pour les objets simples à créer
// - plusieurs instances possibles mais éviter dans ce cas d'y mettre des méthodes
// - pour les objets mono-instance
const MyMath = {
  sum(a, b) {
    return a + b;
  }
};

const coords = {
  x: 1,
  y: 2,
};

console.log('coords.x', coords.x); // 1
coords.z = 3;
console.log('coords.z', coords.z); // 3
delete coords.x;
console.log('coords.x', coords.x); // undefined

// pourquoi éviter les méthodes si plusieurs instances
const contact1 = {
  name: 'Romain',
  hello() {
    return 'Hello ' + this.name;
  },
};

const contact2 = {
  name: 'Eric',
  hello() {
    return 'Hello ' + this.name;
  },
};

console.log('contact1.hello()', contact1.hello()); // Hello Romain
console.log('contact2.hello()', contact2.hello()); // Hello Eric

// est-ce qu'on a qu'une fonction hello ?
console.log('contact1.hello === contact2.hello', contact1.hello === contact2.hello); // false

// On peut créer un objet avec une fonction constructeur
// - si on a des méthodes à ajouter et plusieurs instances à créer
// - tester le type
function Contact(name) {
  this.name = name;
  // if (name.length > 3) {
  //   this.name = name;
  // }
}

Contact.prototype.hello = function( ) {
  return 'Hello ' + this.name;
};

const romain = new Contact('Romain');
console.log('romain.hello()', romain.hello());
// delete romain.name;
console.log('typeof Contact', typeof Contact); // function
console.log('typeof romain', typeof romain); // object


const eric = new Contact('Eric');
console.log('eric.hello()', eric.hello());

// l'opérateur . ou crochet
// fait plusieurs recherche

// en premier il regarde dans l'objet
// ex : romain.name
console.log('romain.name', romain.name);


// si rien dans l'objet il regarde dans le proto
// ex : romain.hello
console.log('romain.hello()', romain.hello());

// si rien dans le proto, il cherche dans d'autres proto dont on hérite
// si rien dans les autres il cherche dans Object.prototype
// si rien dans Object.prototype, il retourne undefined

console.log('romain.hasOwnProperty("name")', romain.hasOwnProperty("name"));
console.log('romain.hasOwnProperty("hello")', romain.hasOwnProperty("hello"));


// est-ce qu'on a qu'une fonction hello ?
console.log('romain.hello === eric.hello', romain.hello === eric.hello); // true
