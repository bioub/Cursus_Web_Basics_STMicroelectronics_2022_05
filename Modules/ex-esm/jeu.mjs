'use strict';

import readline from 'readline';
import { getRandomInt } from './random.mjs';

class Jeu {
  constructor(options = {}) {
    // 6 - object destructuring + shorthand property + default value */
    // const min = options.min || 0;
    // const max = options.max !== undefined ? options.max : 100;

    const { min = 0, max = 100 } = options;

    // Object.assign(this, { min: 0, max: 100 }, options);

    // ES2020 (nullish coalescing operator ??) (optional chaining ?)
    // this.min = options?.min ?? 0;
    // this.max = options?.max ?? 100;

    this.entierAlea = getRandomInt(min, max);
    this.essais = [];
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  }
  jouer() {
    if (this.essais.length) {
      console.log(`Vous avez déjà joué : ${this.essais.join(' - ')}`);
    }

    this.rl.question('Quel est le nombre ? ', (answer) => {
      const entierSaisi = Number.parseInt(answer, 10);

      if (Number.isNaN(entierSaisi)) {
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
}

// exporter Jeu
export default Jeu; // le retour de require sera Jeu directement
