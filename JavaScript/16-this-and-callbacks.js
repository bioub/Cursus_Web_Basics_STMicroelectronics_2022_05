// Problème this vaut Timeout (sous Node.js)
// et pas romain donc name est undefined
// class Contact {
//   constructor(name) {
//     this.name = name;
//   }
//   hello() {
//     console.log('Hello ' + this.name);
//   }
//   helloWithTimeout() {
//     setTimeout(function() {
//       console.log(this);
//       console.log('Hello ' + this.name);
//     }, 1000);
//   }
// }

// Solution historique : utiliser les closures
// class Contact {
//   constructor(name) {
//     this.name = name;
//   }
//   hello() {
//     console.log('Hello ' + this.name);
//   }
//   helloWithTimeout() {
//     const that = this; // _this, me, self
//     setTimeout(function() {
//       console.log(that);
//       console.log('Hello ' + that.name);
//     }, 1000);
//   }
// }

// Solution ES5 : utiliser bind
// class Contact {
//   constructor(name) {
//     this.name = name;
//   }
//   hello() {
//     console.log('Hello ' + this.name);
//   }
//   helloWithTimeout() {
//     setTimeout(function() {
//       console.log(this);
//       console.log('Hello ' + this.name);
//     }.bind(this), 1000);
//   }
// }
// class Contact {
//   constructor(name) {
//     this.name = name;
//   }
//   hello() {
//     console.log('Hello ' + this.name);
//   }
//   helloWithTimeout() {
//     setTimeout(this.hello.bind(this), 1000);
//   }
// }

// Solution ES6 : fonctions fléchées
// class Contact {
//   constructor(name) {
//     this.name = name;
//   }
//   hello() {
//     console.log('Hello ' + this.name);
//   }
//   helloWithTimeout() {
//     setTimeout(() => {
//       // dans une fonction fléchées
//       // les pseudo-variables (this, arguments...)
//       // ne sont pas créées
//       console.log(this);
//       console.log('Hello ' + this.name);
//     }, 1000);
//   }
// }
class Contact {
  constructor(name) {
    this.name = name;
  }
  hello() {
    console.log('Hello ' + this.name);
  }
  helloWithTimeout() {
    setTimeout(() => this.hello(), 1000);
  }
}

const romain = new Contact('Romain');
romain.hello();
romain.helloWithTimeout();

// function setTimeout(fct, delay) {
//   fct()
// }
