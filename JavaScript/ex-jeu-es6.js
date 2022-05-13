'use strict';

const Random = {
  // 1 - method properties
  get: function () {
    return Math.random();
  },
  // 1 - method properties
  getArbitrary: function (min, max) {
    return Math.random() * (max - min) + min;
  },
  // 1 - method properties
  getInt: function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  },
  // 1 - method properties
  getIntInclusive: function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  },
};

const readline = require('readline');

// 2 - class
function Jeu(options /* 3 - default param */) {
  options = options || {};
  // 6 - object destructuring + shorthand property + default value */
  const min = options.min || 0;
  const max = options.max !== undefined ? options.max : 100;
  this.entierAlea = Random.getInt(min, max);
  this.essais = [];
  this.rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
}

Jeu.prototype.jouer = function() {
  if (this.essais.length) {
    // 4 - template literal
    console.log('Vous avez déjà joué : ' + this.essais.join(' - '));
  }

  this.rl.question('Quel est le nombre ? ', (answer) => {
    // 5 - API Number
    const entierSaisi = parseInt(answer, 10);

    // 5 - API Number
    if (isNaN(entierSaisi)) {
      console.log('Erreur : il faut saisir un entier');
      return this.jouer();
    }

    this.essais.push(entierSaisi);

    if (entierSaisi < this.entierAlea) {
      console.log('Trop petit');
      this.jouer();
    } else if (entierSaisi > this.entierAlea) {
      console.log('Trop grand');
      this.jouer();
    } else {
      console.log('Gagné');
      this.rl.close();
    }
  });
}

const game = new Jeu();
game.jouer();
