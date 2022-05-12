globalThis.maVarGlobal = 'maVarGlobal';
const maVarScript = 'maVarScript'; // script / module (ça dépend)

function externe() {
  const maVarClosure = 'maVarClosure';

  function interne() {
    const maVarLocal = 'maVarLocal';

    if (true) {
      const maVarBlock = 'maVarBlock';
      console.log('maVarBlock', maVarBlock);
      console.log('maVarLocal', maVarLocal);
      console.log('maVarClosure', maVarClosure);
      console.log('maVarScript', maVarScript);
      console.log('maVarGlobal', maVarGlobal);
    }

    // console.log('en dehors du if', typeof maVarBlock);
  }

  interne();

}

externe()

console.log(typeof maVar); // undefined
console.log(typeof interne); // undefined

// pile d'appels
// ^
// |
// |
// |interne
// |externe
// +-----------------------------> temps
