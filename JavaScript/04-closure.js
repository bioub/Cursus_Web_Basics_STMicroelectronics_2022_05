function externe() {
  const varClosure = 'varClosure';

  function interne() {
    console.log(varClosure);
  }

  return interne;
}

const fct = externe();
fct();

// pile d'appels
// ^
// |
// |
// |
// |externe - interne/fct
// +-----------------------------> temps



// function externe() {
//   setTimeout(function interne() {

//   }, 1000);
// }

// externe();
